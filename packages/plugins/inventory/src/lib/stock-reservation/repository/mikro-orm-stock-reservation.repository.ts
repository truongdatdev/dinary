/**
 * MikroORM repository for StockReservation.
 */
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { StockReservation } from '../stock-reservation.entity';

export class MikroOrmStockReservationRepository extends MikroOrmBaseEntityRepository<StockReservation> {}
