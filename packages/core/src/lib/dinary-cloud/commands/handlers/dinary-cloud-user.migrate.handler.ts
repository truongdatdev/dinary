import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { switchMap, catchError } from 'rxjs/operators';
import { DinaryCloudService } from '../../dinary-cloud.service';
import { DinaryCloudUserMigrateCommand } from './../dinary-cloud-user.migrate.command';

@CommandHandler(DinaryCloudUserMigrateCommand)
export class DinaryCloudUserMigrateHandler implements ICommandHandler<DinaryCloudUserMigrateCommand> {

	constructor(
		private readonly dinaryCloudService: DinaryCloudService
	) {}

	public async execute(command: DinaryCloudUserMigrateCommand): Promise<any> {
		const { input } = command;
		return this.dinaryCloudService.migrateUser(input).pipe(
			switchMap((response: any) => {
				if (response && response.data) {
					const { data } = response;
					const { password } = input;
					return this.dinaryCloudService.extractToken({
						email: data.email,
						password
					});
				}
			}),
			catchError((error) => {
				console.log('Bad Promise:', error);
				throw new BadRequestException(error);
			})
		);
	}
}
