import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProject } from '@dinary/contracts';

export class OrganizationProjectStatusBulkCreateCommand implements ICommand {
	static readonly type = '[Organization Project] Task Status Bulk Create';

	constructor(
		public readonly input: IOrganizationProject
	) { }
}
