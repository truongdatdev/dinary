/**
 * MikroORM repository for StockTransfer.
 */
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { StockTransfer } from '../stock-transfer.entity';

export class MikroOrmStockTransferRepository extends MikroOrmBaseEntityRepository<StockTransfer> {}
