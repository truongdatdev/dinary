import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderClaimLine } from '../order-claim-line.entity';

@Injectable()
export class MikroOrmOrderClaimLineRepository extends MikroOrmBaseEntityRepository<OrderClaimLine> {}
