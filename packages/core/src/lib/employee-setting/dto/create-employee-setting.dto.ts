import { IntersectionType } from '@nestjs/swagger';
import { IEmployeeSettingCreateInput } from '@dinary/contracts';
import { TenantOrganizationBaseDTO } from '../../core/dto';
import { EmployeeSetting } from '../employee-setting.entity';

/**
 * Create Employee Setting DTO request validation
 */
export class CreateEmployeeSettingDTO
	extends IntersectionType(TenantOrganizationBaseDTO, EmployeeSetting)
	implements IEmployeeSettingCreateInput {}
