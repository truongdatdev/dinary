import { ICommand } from '@nestjs/cqrs';
import { ITenantCreateInput } from '@dinary/contracts';

export class DinaryCloudTenantMigrateCommand implements ICommand {
	static readonly type = '[Dinary Cloud] Tenant Migrate';

	constructor(
		public readonly input: ITenantCreateInput,
		public readonly token: string
	) {}
}
