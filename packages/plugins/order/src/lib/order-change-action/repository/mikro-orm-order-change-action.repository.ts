import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderChangeAction } from '../order-change-action.entity';

@Injectable()
export class MikroOrmOrderChangeActionRepository extends MikroOrmBaseEntityRepository<OrderChangeAction> {}