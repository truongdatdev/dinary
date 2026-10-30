import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { IGetJobPresetInput } from '@dinary/contracts';
import { EmployeeFeatureDTO, TenantOrganizationBaseDTO } from '@dinary/core';

export class JobPresetQueryDTO extends IntersectionType(
	TenantOrganizationBaseDTO,
	PartialType(PickType(EmployeeFeatureDTO, ['employeeId']))
) implements IGetJobPresetInput { }
