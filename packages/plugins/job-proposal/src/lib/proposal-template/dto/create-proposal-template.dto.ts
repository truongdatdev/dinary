import { IEmployeeProposalTemplateCreateInput } from '@dinary/contracts';
import { IntersectionType } from '@nestjs/mapped-types';
import { EmployeeFeatureDTO } from '@dinary/core';
import { ProposalTemplateDTO } from './proposal-template.dto';

/**
 * Create proposal template request DTO validation
 *
 */
export class CreateProposalTemplateDTO
	extends IntersectionType(ProposalTemplateDTO, EmployeeFeatureDTO)
	implements IEmployeeProposalTemplateCreateInput {}
