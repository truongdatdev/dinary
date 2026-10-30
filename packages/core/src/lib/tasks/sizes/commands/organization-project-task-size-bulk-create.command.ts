import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProject } from '@dinary/contracts';

export class OrganizationProjectTaskSizeBulkCreateCommand implements ICommand {
	static readonly type = '[Organization Project] Task Size Bulk Create';

	constructor(
		public readonly input: IOrganizationProject
	) { }
}
