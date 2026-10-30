import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { Subscription } from '../subscription.entity';

@Injectable()
export class MikroOrmSubscriptionRepository extends MikroOrmBaseEntityRepository<Subscription> {}
