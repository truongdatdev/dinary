import { IntersectionType, PartialType } from '@nestjs/swagger';
import { ITaskStatusUpdateInput } from '@dinary/contracts';
import { TenantOrganizationBaseDTO } from './../../../core/dto';
import { TaskStatus } from '../status.entity';

export class UpdatesStatusDTO
	extends IntersectionType(PartialType(TenantOrganizationBaseDTO), PartialType(TaskStatus))
	implements ITaskStatusUpdateInput {}
