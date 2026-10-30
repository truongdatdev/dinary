import { ICommand } from '@nestjs/cqrs';
import { ID, IIntegrationTenantFindInput } from '@dinary/contracts';

export class IntegrationTenantDeleteCommand implements ICommand {
	static readonly type = '[Integration] Delete Integration';

	constructor(public readonly id: ID, public readonly options: IIntegrationTenantFindInput) {}
}
