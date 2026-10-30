import { ICommand } from '@nestjs/cqrs';
import { ISubmitTimesheetInput } from '@dinary/contracts';

export class TimesheetSubmitCommand implements ICommand {
	static readonly type = '[Timesheet] Submit';

	constructor(
		public readonly input: ISubmitTimesheetInput
	) {}
}
