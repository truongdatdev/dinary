import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { PluginSubscription } from '../entities/plugin-subscription.entity';

export class MikroOrmPluginSubscriptionRepository extends MikroOrmBaseEntityRepository<PluginSubscription> {}
