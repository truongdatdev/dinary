import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { SubscriptionItem } from '../subscription-item.entity';

@Injectable()
export class MikroOrmSubscriptionItemRepository extends MikroOrmBaseEntityRepository<SubscriptionItem> {}
