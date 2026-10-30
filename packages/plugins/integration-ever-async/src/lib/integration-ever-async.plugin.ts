import { ApplicationPluginConfig } from '@dinary/common';
import { DinaryCorePlugin as Plugin, IOnPluginBootstrap, IOnPluginDestroy } from '@dinary/plugin';
import { EverAsyncModule } from './ever-async.module';

@Plugin({
	imports: [EverAsyncModule],
	entities: [],
	configuration: (config: ApplicationPluginConfig) => {
		return config;
	}
})
export class IntegrationEverAsyncPlugin implements IOnPluginBootstrap, IOnPluginDestroy {
	private logEnabled = true;

	onPluginBootstrap(): void | Promise<void> {
		if (this.logEnabled) {
			console.log('IntegrationEverAsyncPlugin is being bootstrapped...');
		}
	}

	onPluginDestroy(): void | Promise<void> {
		if (this.logEnabled) {
			console.log('IntegrationEverAsyncPlugin is being destroyed...');
		}
	}
}
