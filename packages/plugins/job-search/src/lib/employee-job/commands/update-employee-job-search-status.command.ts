import { ID, UpdateEmployeeJobsStatistics } from '@dinary/contracts';
import { ICommand } from '@nestjs/cqrs';

export class UpdateEmployeeJobSearchStatusCommand implements ICommand {
	static readonly type = '[Employee] Update Job Search Status';

	constructor(public readonly employeeId: ID, public readonly input: UpdateEmployeeJobsStatistics) {}
}
