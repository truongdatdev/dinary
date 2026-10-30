import { Body, Controller, HttpStatus, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
	IOrganizationCreateInput,
	ITenantCreateInput,
	IUserRegistrationInput,
	PermissionsEnum
} from '@dinary/contracts';
import { CloudMigrateInterceptor } from './../core/interceptors';
import { PermissionGuard, TenantPermissionGuard } from './../shared/guards';
import { Permissions } from './../shared/decorators';
import {
	DinaryCloudOrganizationMigrateCommand,
	DinaryCloudTenantMigrateCommand,
	DinaryCloudUserMigrateCommand
} from './commands';

@UseInterceptors(CloudMigrateInterceptor)
@UseGuards(TenantPermissionGuard, PermissionGuard)
@Permissions(PermissionsEnum.MIGRATE_DINARY_CLOUD)
@Controller('/cloud/migrate')
export class DinaryCloudController {
	constructor(private readonly commandBus: CommandBus) {}

	/**
	 *
	 * @param body
	 * @returns
	 */
	@ApiOperation({ summary: 'Migrate self hosted to dinary cloud hosted' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The user has been successfully created in the Dinary cloud.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post()
	async migrateUserToDinaryCloud(@Body() body: IUserRegistrationInput) {
		return await this.commandBus.execute(new DinaryCloudUserMigrateCommand(body));
	}

	/**
	 *
	 * @param body
	 * @param token
	 * @returns
	 */
	@ApiOperation({ summary: 'Migrate self hosted tenant into the dinary cloud tenant' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The tenant has been successfully created in the Dinary cloud.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post('tenant/:token')
	async migrateTenantToDinaryCloud(@Body() body: ITenantCreateInput, @Param('token') token: string) {
		return await this.commandBus.execute(new DinaryCloudTenantMigrateCommand(body, token));
	}

	/**
	 *
	 * @param body
	 * @param token
	 * @returns
	 */
	@ApiOperation({ summary: 'Migrate self hosted organization into the dinary cloud organization' })
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The organization has been successfully created in the Dinary cloud.'
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input, The response body may contain clues as to what went wrong'
	})
	@Post('organization/:token')
	async migrateOrganizationToDinaryCloud(@Body() body: IOrganizationCreateInput, @Param('token') token: string) {
		return await this.commandBus.execute(new DinaryCloudOrganizationMigrateCommand(body, token));
	}
}
