import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { SellerTransaction } from '../seller-transaction.entity';

/**
 * The MikroORM side of the SellerTransaction aggregate.
 */
@Injectable()
export class MikroOrmSellerTransactionRepository extends MikroOrmBaseEntityRepository<SellerTransaction> {}