import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { ITaskStatusFindInput } from '@dinary/contracts';
import { TenantOrganizationBaseDTO } from './../../../core/dto';
import { TaskStatus } from './../status.entity';

export class StatusQueryDTO
	extends IntersectionType(
		PartialType(TenantOrganizationBaseDTO),
		PickType(TaskStatus, ['projectId', 'organizationTeamId'])
	)
	implements ITaskStatusFindInput {}
