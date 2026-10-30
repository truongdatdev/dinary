import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { SubscriptionPlan } from '../subscription-plan.entity';

@Injectable()
export class MikroOrmSubscriptionPlanRepository extends MikroOrmBaseEntityRepository<SubscriptionPlan> {}
