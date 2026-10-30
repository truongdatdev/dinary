import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { CommerceCartLine } from '../commerce-cart-line.entity';

@Injectable()
export class MikroOrmCommerceCartLineRepository extends MikroOrmBaseEntityRepository<CommerceCartLine> {}
