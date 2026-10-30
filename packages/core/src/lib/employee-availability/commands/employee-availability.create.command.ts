import { ICommand } from '@nestjs/cqrs';
import { IEmployeeAvailabilityCreateInput } from '@dinary/contracts';

export class EmployeeAvailabilityCreateCommand implements ICommand {
	static readonly type = '[EmployeeAvailability] Create';

	constructor(public readonly input: IEmployeeAvailabilityCreateInput) {}
}
