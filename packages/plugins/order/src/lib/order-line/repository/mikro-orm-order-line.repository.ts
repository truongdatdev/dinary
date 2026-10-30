import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderLine } from '../order-line.entity';

@Injectable()
export class MikroOrmOrderLineRepository extends MikroOrmBaseEntityRepository<OrderLine> {}