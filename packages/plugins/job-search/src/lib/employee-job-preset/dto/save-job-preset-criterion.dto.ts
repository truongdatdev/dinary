import { IntersectionType } from '@nestjs/swagger';
import { TenantOrganizationBaseDTO } from '@dinary/core';
import { IMatchingCriterions } from '@dinary/contracts';

export class SaveJobPresetCriterionDTO
	extends IntersectionType(TenantOrganizationBaseDTO)
	implements IMatchingCriterions {}
