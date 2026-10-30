import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { Entitlement } from '../entitlement.entity';

@Injectable()
export class MikroOrmEntitlementRepository extends MikroOrmBaseEntityRepository<Entitlement> {}
