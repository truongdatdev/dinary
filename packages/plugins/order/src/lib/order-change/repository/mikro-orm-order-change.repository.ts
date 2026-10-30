import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderChange } from '../order-change.entity';

@Injectable()
export class MikroOrmOrderChangeRepository extends MikroOrmBaseEntityRepository<OrderChange> {}