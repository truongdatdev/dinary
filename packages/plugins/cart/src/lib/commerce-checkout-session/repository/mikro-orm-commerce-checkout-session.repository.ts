import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { CommerceCheckoutSession } from '../commerce-checkout-session.entity';

@Injectable()
export class MikroOrmCommerceCheckoutSessionRepository extends MikroOrmBaseEntityRepository<CommerceCheckoutSession> {}
