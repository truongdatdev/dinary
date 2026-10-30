import { IntersectionType, PartialType } from '@nestjs/swagger';
import { IEntitySubscriptionFindInput } from '@dinary/contracts';
import { EntitySubscription } from '../entity-subscription.entity';
import { TenantOrganizationBaseDTO } from '../../core/dto';

/**
 * Entity subscription find input DTO validation
 */
export class EntitySubscriptionFindInputDTO
	extends IntersectionType(TenantOrganizationBaseDTO, PartialType(EntitySubscription))
	implements IEntitySubscriptionFindInput {}
