import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { SubscriptionBilling } from '../subscription-billing.entity';

@Injectable()
export class MikroOrmSubscriptionBillingRepository extends MikroOrmBaseEntityRepository<SubscriptionBilling> {}
