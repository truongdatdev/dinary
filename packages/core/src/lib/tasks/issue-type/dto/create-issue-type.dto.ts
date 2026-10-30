import { IntersectionType, PartialType } from '@nestjs/swagger';
import { IIssueTypeCreateInput } from '@dinary/contracts';
import { TenantOrganizationBaseDTO } from '../../../core/dto';
import { IssueType } from '../issue-type.entity';

export class CreateIssueTypeDTO
	extends IntersectionType(PartialType(TenantOrganizationBaseDTO), IssueType)
	implements IIssueTypeCreateInput {}
