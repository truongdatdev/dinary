import {
	EVER_WORKS_TASK_STATUSES,
	everWorksPriorityToDinary,
	everWorksStatusToDinary,
	dinaryPriorityToEverWorks,
	dinaryStatusSlug,
	dinaryStatusToEverWorks,
	dinaryTaskPriorityValue,
	dinaryTaskStatusFlags,
	dinaryTaskStatusValue,
	resolveDinaryStatusRow
} from './status-priority.mapper';

describe('reading a Dinary task status / priority (string first, the row only without one)', () => {
	// A synced task carries the option rows the sync wrote; the web app, REST clients and Ever Teams' status menu
	// then change only the string (Ever Teams sends the OLD taskStatusId along). The string is current.
	const backlogRow = { value: 'backlog', isTodo: true, isInProgress: false, isDone: false };
	const highRow = { value: 'high' };

	it('takes the status string over a stale status row', () => {
		expect(dinaryTaskStatusValue({ status: 'in-progress', taskStatus: backlogRow })).toBe('in-progress');
		expect(dinaryStatusToEverWorks(dinaryTaskStatusValue({ status: 'in-progress', taskStatus: backlogRow }))).toBe(
			'in_progress'
		);
	});

	it('falls back to the row when the task has no status string', () => {
		expect(dinaryTaskStatusValue({ status: null, taskStatus: backlogRow })).toBe('backlog');
		expect(dinaryTaskStatusValue({})).toBeNull();
	});

	it('uses the row flags only when the row is the current status', () => {
		const custom = { value: 'qa-check', isTodo: false, isInProgress: true, isDone: false };
		expect(dinaryTaskStatusFlags({ status: 'qa-check', taskStatus: custom })).toEqual({
			isTodo: false,
			isInProgress: true,
			isDone: false
		});
		expect(dinaryTaskStatusFlags({ taskStatus: custom })).toEqual({
			isTodo: false,
			isInProgress: true,
			isDone: false
		});
		expect(dinaryTaskStatusFlags({ status: 'another-custom', taskStatus: custom })).toEqual({});
		expect(dinaryTaskStatusFlags({ status: 'qa-check' })).toEqual({});
	});

	it('takes the priority string over a stale priority row', () => {
		expect(dinaryTaskPriorityValue({ priority: 'low', taskPriority: highRow })).toBe('low');
		expect(dinaryPriorityToEverWorks(dinaryTaskPriorityValue({ priority: 'low', taskPriority: highRow }))).toBe('p4');
		expect(dinaryTaskPriorityValue({ priority: null, taskPriority: highRow })).toBe('high');
		expect(dinaryTaskPriorityValue({})).toBeNull();
	});
});

describe('status mapping (plan 01 §7.1)', () => {
	it.each([
		['backlog', 'backlog', 'isTodo'],
		['todo', 'open', 'isTodo'],
		['in_progress', 'in-progress', 'isInProgress'],
		['in_review', 'in-review', 'isInProgress'],
		['blocked', 'blocked', 'isInProgress'],
		['done', 'done', 'isDone'],
		['cancelled', 'cancelled', null]
	])('EW %s → G %s (fallback %s)', (ew, slug, flag) => {
		expect(everWorksStatusToDinary(ew)).toEqual({ slug, flag });
	});

	it('EW → G: an unknown status maps to nothing', () => {
		expect(everWorksStatusToDinary('archived')).toBeNull();
		expect(everWorksStatusToDinary(undefined)).toBeNull();
	});

	it.each([
		['backlog', 'backlog'],
		['open', 'todo'],
		['Open', 'todo'],
		['in-progress', 'in_progress'],
		['In Progress', 'in_progress'],
		['in_progress', 'in_progress'],
		['ready-for-review', 'in_review'],
		['in-review', 'in_review'],
		['blocked', 'blocked'],
		['done', 'done'],
		['completed', 'done'],
		['cancelled', 'cancelled']
	])('G %s → EW %s', (g, ew) => {
		expect(dinaryStatusToEverWorks(g)).toBe(ew);
	});

	it('G → EW: a custom status maps by its flags, done first; no flag → unchanged', () => {
		expect(dinaryStatusToEverWorks('shipped', { isDone: true, isInProgress: true })).toBe('done');
		expect(dinaryStatusToEverWorks('qa', { isInProgress: true })).toBe('in_progress');
		expect(dinaryStatusToEverWorks('triage', { isTodo: true })).toBe('todo');
		expect(dinaryStatusToEverWorks('parked', {})).toBeNull();
	});

	it('round-trips every Ever Works status through its Dinary slug', () => {
		for (const status of EVER_WORKS_TASK_STATUSES) {
			expect(dinaryStatusToEverWorks(everWorksStatusToDinary(status)!.slug)).toBe(status);
		}
	});

	it('resolves the Dinary row by slug, then by flag; cancelled → a row with no flag', () => {
		const rows = [
			{ value: 'Ready', isTodo: true },
			{ value: 'Doing', isInProgress: true },
			{ value: 'Shipped', isDone: true },
			{ value: 'Dropped' },
			{ value: 'in-review', isInProgress: true }
		];
		expect(resolveDinaryStatusRow('in_review', rows)?.value).toBe('in-review');
		expect(resolveDinaryStatusRow('in_progress', rows)?.value).toBe('Doing');
		expect(resolveDinaryStatusRow('todo', rows)?.value).toBe('Ready');
		expect(resolveDinaryStatusRow('done', rows)?.value).toBe('Shipped');
		expect(resolveDinaryStatusRow('cancelled', rows)?.value).toBe('Dropped');
		expect(resolveDinaryStatusRow('nonsense', rows)).toBeNull();
		expect(dinaryStatusSlug(' In_Review ')).toBe('in-review');
	});
});

describe('priority mapping (plan 01 §7)', () => {
	it.each([
		['p0', 'urgent'],
		['p1', 'high'],
		['p2', 'medium'],
		['p3', 'medium'],
		['p4', 'low'],
		['P1', 'high'],
		['p9', null]
	])('EW %s → G %s', (ew, g) => expect(everWorksPriorityToDinary(ew)).toBe(g));

	it.each([
		['urgent', 'p0'],
		['high', 'p1'],
		['medium', 'p3'],
		['Medium', 'p3'],
		['low', 'p4'],
		['custom', null],
		[null, null]
	])('G %s → EW %s', (g, ew) => expect(dinaryPriorityToEverWorks(g)).toBe(ew));
});
