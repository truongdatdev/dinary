import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { CommerceCart } from '../commerce-cart.entity';

@Injectable()
export class MikroOrmCommerceCartRepository extends MikroOrmBaseEntityRepository<CommerceCart> {}
