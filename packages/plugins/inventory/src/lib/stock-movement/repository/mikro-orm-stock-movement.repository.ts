/**
 * MikroORM repository for StockMovement.
 */
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { StockMovement } from '../stock-movement.entity';

export class MikroOrmStockMovementRepository extends MikroOrmBaseEntityRepository<StockMovement> {}
