import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DinaryCloudService } from '../../dinary-cloud.service';
import { DinaryCloudOrganizationMigrateCommand } from './../dinary-cloud-organization.migrate.command';

@CommandHandler(DinaryCloudOrganizationMigrateCommand)
export class DinaryCloudOrganizationMigrateHandler implements ICommandHandler<DinaryCloudOrganizationMigrateCommand> {

	constructor(
		private readonly dinaryCloudService: DinaryCloudService
	) {}

	public async execute(command: DinaryCloudOrganizationMigrateCommand): Promise<any> {
		const { input, token } = command;
		return this.dinaryCloudService.migrateOrganization(input, token);
	}
}
