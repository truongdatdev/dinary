import { PickType } from '@nestjs/swagger';
import { IBasePerTenantAndOrganizationEntityModel } from '@dinary/contracts';
import { TenantOrganizationBaseDTO } from '../../core/dto/tenant-organization-base.dto';

/**
 * Delete query DTO
 *
 */
export class DeleteQueryDTO<T>
	extends PickType(TenantOrganizationBaseDTO, ['organizationId', 'tenantId'])
	implements IBasePerTenantAndOrganizationEntityModel {}
