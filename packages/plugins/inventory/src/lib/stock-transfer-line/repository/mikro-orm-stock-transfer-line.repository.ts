/**
 * MikroORM repository for StockTransferLine.
 */
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { StockTransferLine } from '../stock-transfer-line.entity';

export class MikroOrmStockTransferLineRepository extends MikroOrmBaseEntityRepository<StockTransferLine> {}
