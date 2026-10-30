import { createHash } from 'node:crypto';
import { INTEGRATIONS } from '../sdk';
import { DINARY_INTEGRATIONS, dinaryIntegration, offeredOn, sharedDefinition } from './integration-definitions';

/**
 * The scopes Dinary shows (and app.dinary.app consents to) are the definitions of the SDK's contracts
 * package (`@ever-co/connect-contracts`). Each key Dinary offers pins the `scope_version` and the
 * SHA-256 of the scope it was reviewed with; when a new package version changes a scope, this fails
 * until the pin is reviewed and updated. (The SDK's own build checks that a changed scope also gets
 * a new `scope_version`.)
 */

/** The SDK's digest of a scope: SHA-256 of its JSON with sorted keys, two-space indented, plus a newline. */
function sortKeys(value: unknown): unknown {
	if (Array.isArray(value)) return value.map(sortKeys);
	if (value && typeof value === 'object') {
		return Object.fromEntries(
			Object.keys(value as Record<string, unknown>)
				.sort()
				.map((key) => [key, sortKeys((value as Record<string, unknown>)[key])])
		);
	}
	return value;
}
export const scopeDigest = (scope: unknown): string =>
	createHash('sha256')
		.update(`${JSON.stringify(sortKeys(scope ?? []), null, 2)}\n`)
		.digest('hex');

describe('integration definitions', () => {
	it('Dinary offers exactly the SDK keys whose products include dinary', () => {
		const forDinary = Object.values(INTEGRATIONS)
			.filter((definition) => definition.products.includes('dinary'))
			.map((definition) => definition.key)
			.sort();
		expect(DINARY_INTEGRATIONS.map((definition) => definition.key).sort()).toEqual(forDinary);
	});

	it.each(DINARY_INTEGRATIONS.map((definition) => [definition.key, definition] as const))(
		'%s: the pinned scope version and digest are the scope shipped',
		(key, definition) => {
			const shared = sharedDefinition(key);
			expect(definition.scopeVersion).toBe(shared.scope_version);
			expect(scopeDigest(shared.scope)).toBe(definition.scopeSha256);
		}
	);

	it('only instance_url and stats_link can be enabled in this release; lookup and discoverability are coming soon', () => {
		expect(
			DINARY_INTEGRATIONS.filter((definition) => definition.available).map((definition) => definition.key)
		).toEqual(['instance_url', 'stats_link']);
		expect(dinaryIntegration('counterparty_lookup')?.available).toBe(false);
		expect(dinaryIntegration('counterparty_discoverable')?.available).toBe(false);
	});

	it('the installation-wide keys are instance_url, stats_link, ever_id_login and webhooks', () => {
		expect(
			DINARY_INTEGRATIONS.filter((definition) => definition.instanceWide)
				.map((definition) => definition.key)
				.sort()
		).toEqual(['ever_id_login', 'instance_url', 'stats_link', 'webhooks']);
	});

	it('stats_link is never offered on Dinary Cloud; billing_link only there', () => {
		expect(offeredOn(dinaryIntegration('stats_link')!, true)).toBe(false);
		expect(offeredOn(dinaryIntegration('stats_link')!, false)).toBe(true);
		expect(offeredOn(dinaryIntegration('billing_link')!, false)).toBe(false);
	});

	it('a changed scope without a new scope_version fails (control)', () => {
		const shared = sharedDefinition('stats_link');
		const changed = [...shared.scope, { ...shared.scope[0], field_path: 'instance.something_else' }];
		expect(scopeDigest(changed)).not.toBe(dinaryIntegration('stats_link')!.scopeSha256);
	});
});
