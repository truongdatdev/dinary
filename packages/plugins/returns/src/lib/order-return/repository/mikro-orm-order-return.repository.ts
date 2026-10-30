import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderReturn } from '../order-return.entity';

@Injectable()
export class MikroOrmOrderReturnRepository extends MikroOrmBaseEntityRepository<OrderReturn> {}
