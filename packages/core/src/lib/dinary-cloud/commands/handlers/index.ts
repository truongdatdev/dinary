import { DinaryCloudOrganizationMigrateHandler } from './dinary-cloud-organization.migrate.handler';
import { DinaryCloudTenantMigrateHandler } from './dinary-cloud-tenant.migrate.handler';
import { DinaryCloudUserMigrateHandler } from './dinary-cloud-user.migrate.handler';

export const CommandHandlers = [
    DinaryCloudUserMigrateHandler,
    DinaryCloudTenantMigrateHandler,
    DinaryCloudOrganizationMigrateHandler
];
