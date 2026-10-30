import { ApplicationPluginConfig } from '@dinary/common';
import { DinaryCorePlugin as Plugin, IOnPluginBootstrap, IOnPluginDestroy } from '@dinary/plugin';
import { INBOX_MIGRATIONS } from './database/inbox-migrations';
import { INBOX_ENTITIES, InboxModule } from './inbox.module';
import { InboxResolver } from './graphql/inbox.resolver';
import { inboxSchemaExtensions } from './graphql/inbox.schema';

export { INBOX_MIGRATIONS };

/**
 * The Dinary Inbox (`@dinary/plugin-inbox`, plan 04, G-P3-1).
 *
 * Dinary is production: the plugin is listed by `apps/api/src/plugins.ts` only when `DINARY_INBOX_ENABLED` is
 * exactly `true` (`isInboxEnabled`). Off (the default) it is not loaded at all: no route, no GraphQL field, no table
 * (its migrations are not even registered) and no role grant.
 */
@Plugin({
	imports: [InboxModule],
	// Arrays, not factories: the platform resolves a factory for migrations but not for entities.
	entities: [...INBOX_ENTITIES],
	migrations: [...INBOX_MIGRATIONS],
	// The GraphQL mirror of the read routes and `markInboxItem` (plan 04 §3), served only with the plugin.
	extensions: {
		schema: inboxSchemaExtensions,
		resolvers: [InboxResolver]
	},
	configuration: (config: ApplicationPluginConfig) => config
})
export class InboxPlugin implements IOnPluginBootstrap, IOnPluginDestroy {
	onPluginBootstrap(): void {
		console.log('InboxPlugin is being bootstrapped...');
	}

	onPluginDestroy(): void {
		console.log('InboxPlugin is being destroyed...');
	}
}
