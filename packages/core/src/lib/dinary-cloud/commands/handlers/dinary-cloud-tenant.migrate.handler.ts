import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { catchError, tap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { ITenant } from '@dinary/contracts';
import { DinaryCloudService } from '../../dinary-cloud.service';
import { RoleService } from './../../../role/role.service';
import { DinaryCloudTenantMigrateCommand } from './../dinary-cloud-tenant.migrate.command';
import { RolePermissionService } from './../../../role-permission/role-permission.service';

@CommandHandler(DinaryCloudTenantMigrateCommand)
export class DinaryCloudTenantMigrateHandler implements ICommandHandler<DinaryCloudTenantMigrateCommand> {

	constructor(
		private readonly _dinaryCloudService: DinaryCloudService,
		private readonly _roleService: RoleService,
		private readonly _rolePermissionService: RolePermissionService
	) {}

	public async execute(command: DinaryCloudTenantMigrateCommand): Promise<any> {
		const { input, token } = command;
		return this._dinaryCloudService.migrateTenant(input, token).pipe(
			tap(async (response: any) => {
				if (response && response.data) {
					const tenant = response.data;

					this.migrateRoles(tenant, token);
					this.migratePermissions(tenant, token);
				}
			}),
			catchError((error) => {
				console.log('Bad Promise:', error);
				return observableOf(error)
			})
		);
	}

	private async migrateRoles(
		tenant: ITenant, 
		token: string
	) {
		return this._dinaryCloudService.migrateRoles(
			await this._roleService.migrateRoles(), 
			token, 
			tenant
		)
		.subscribe();
	}

	private async migratePermissions(
		tenant: ITenant, 
		token: string
	) {
		return this._dinaryCloudService.migrateRolePermissions(
			await this._rolePermissionService.migratePermissions(), 
			token, 
			tenant
		)
		.subscribe();
	}
}
