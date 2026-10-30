import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderTransaction } from '../order-transaction.entity';

@Injectable()
export class MikroOrmOrderTransactionRepository extends MikroOrmBaseEntityRepository<OrderTransaction> {}