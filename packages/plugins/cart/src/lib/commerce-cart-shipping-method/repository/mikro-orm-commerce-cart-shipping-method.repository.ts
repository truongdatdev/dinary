import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { CommerceCartShippingMethod } from '../commerce-cart-shipping-method.entity';

@Injectable()
export class MikroOrmCommerceCartShippingMethodRepository extends MikroOrmBaseEntityRepository<CommerceCartShippingMethod> {}
