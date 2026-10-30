import { IntersectionType, PartialType } from '@nestjs/swagger';
import { ITaskStatusCreateInput } from '@dinary/contracts';
import { TaskStatus } from '../status.entity';
import { TenantOrganizationBaseDTO } from './../../../core/dto';

export class CreateStatusDTO
	extends IntersectionType(PartialType(TenantOrganizationBaseDTO), TaskStatus)
	implements ITaskStatusCreateInput {}
