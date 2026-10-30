import { ICommand } from '@nestjs/cqrs';
import { IOrganizationCreateInput } from '@dinary/contracts';

export class DinaryCloudOrganizationMigrateCommand implements ICommand {
	static readonly type = '[Dinary Cloud] Organization Migrate';

	constructor(
		public readonly input: IOrganizationCreateInput,
		public readonly token: string
	) {}
}
