import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderSummary } from '../order-summary.entity';

@Injectable()
export class MikroOrmOrderSummaryRepository extends MikroOrmBaseEntityRepository<OrderSummary> {}