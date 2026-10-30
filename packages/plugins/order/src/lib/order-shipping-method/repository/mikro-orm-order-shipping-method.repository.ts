import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { OrderShippingMethod } from '../order-shipping-method.entity';

@Injectable()
export class MikroOrmOrderShippingMethodRepository extends MikroOrmBaseEntityRepository<OrderShippingMethod> {}