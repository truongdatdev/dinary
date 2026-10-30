import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderExchange } from '../order-exchange.entity';

@Injectable()
export class MikroOrmOrderExchangeRepository extends MikroOrmBaseEntityRepository<OrderExchange> {}
