import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProjectEditByEmployeeInput } from '@dinary/contracts';

export class OrganizationProjectEditByEmployeeCommand implements ICommand {
	static readonly type = '[OrganizationProject] Edit By Employee';

	constructor(public readonly input: IOrganizationProjectEditByEmployeeInput) {}
}
