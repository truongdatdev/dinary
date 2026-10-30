import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { ExchangeRate } from '../exchange-rate.entity';

export class MikroOrmExchangeRateRepository extends MikroOrmBaseEntityRepository<ExchangeRate> {}
