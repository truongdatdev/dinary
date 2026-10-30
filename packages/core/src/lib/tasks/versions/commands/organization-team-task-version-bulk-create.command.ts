import { ICommand } from '@nestjs/cqrs';
import { IOrganizationTeam } from '@dinary/contracts';

export class OrganizationTeamTaskVersionBulkCreateCommand implements ICommand {
	static readonly type = '[Organization Team] Task Version Bulk Create';

	constructor(public readonly input: IOrganizationTeam) {}
}
