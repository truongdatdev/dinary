/**
 * MikroORM repository for StockCount.
 */
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { StockCount } from '../stock-count.entity';

export class MikroOrmStockCountRepository extends MikroOrmBaseEntityRepository<StockCount> {}
