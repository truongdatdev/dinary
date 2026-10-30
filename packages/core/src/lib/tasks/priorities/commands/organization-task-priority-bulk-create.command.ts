import { ICommand } from '@nestjs/cqrs';
import { IOrganization } from '@dinary/contracts';

export class OrganizationTaskPriorityBulkCreateCommand implements ICommand {
	static readonly type = '[Organization] Task Priority Bulk Create';

	constructor(
		public readonly input: IOrganization
	) { }
}
