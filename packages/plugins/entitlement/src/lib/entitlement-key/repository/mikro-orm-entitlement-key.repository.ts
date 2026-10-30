import { Injectable } from '@nestjs/common';
import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { EntitlementKey } from '../entitlement-key.entity';

@Injectable()
export class MikroOrmEntitlementKeyRepository extends MikroOrmBaseEntityRepository<EntitlementKey> {}
