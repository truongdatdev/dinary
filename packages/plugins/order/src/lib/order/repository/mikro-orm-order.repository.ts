import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { Order } from '../order.entity';

@Injectable()
export class MikroOrmOrderRepository extends MikroOrmBaseEntityRepository<Order> {}