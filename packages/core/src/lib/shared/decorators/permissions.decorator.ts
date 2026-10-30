import { SetMetadata } from '@nestjs/common';
import { PERMISSIONS_METADATA } from '@dinary/constants';
import { PermissionsEnum } from '@dinary/contracts';

export const Permissions = (...permissions: PermissionsEnum[]) => SetMetadata(PERMISSIONS_METADATA, permissions);
