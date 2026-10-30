import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { ROLES_METADATA } from '@dinary/constants';
import { RolesEnum } from '@dinary/contracts';

export const Roles = (...roles: RolesEnum[]): CustomDecorator => SetMetadata(ROLES_METADATA, roles);
