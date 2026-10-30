import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { EverInstance } from '@dinary/plugin-ever-instance';
import { EVER_CONNECT_ENTITIES } from './entities';
import {
	EverConnectOrganizationDeletionSubscriber,
	EverConnectTenantDeletionSubscriber
} from './ever-connect-deletion.subscriber';
import { EverConnectModule } from './ever-connect.module';

/**
 * `ever_instance` is registered by one Dinary Cloud plugin only: the anonymous statistics plugin
 * when it is loaded (unless `EVER_STATS_ENABLED=false`), this one otherwise.
 */
const entities =
	process.env['EVER_STATS_ENABLED'] === 'false'
		? EVER_CONNECT_ENTITIES
		: EVER_CONNECT_ENTITIES.filter((entity) => entity !== EverInstance);

/**
 * Dinary Cloud connection: connects this installation to Dinary Cloud with a connect code from
 * app.dinary.app, links Dinary organizations to Dinary Cloud organizations, and holds the state of each
 * integration (nothing moves for one unless an administrator consented to it in app.dinary.app).
 *
 * Off by default. Loaded only with `EVER_CONNECT_ENABLED=true`; otherwise it is not part of the API
 * at all (no route, no timer, no request). Loaded but not connected, it sends nothing.
 */
@Plugin({
	imports: [EverConnectModule.register()],
	entities: [...entities],
	// A deleted Dinary tenant or organization: its link is removed and its rows go with it.
	subscribers: [EverConnectOrganizationDeletionSubscriber, EverConnectTenantDeletionSubscriber]
})
export class EverConnectPlugin {}
