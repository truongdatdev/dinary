import { PluginSourceType } from '@dinary/contracts';
import { ISourceStrategy } from '../../shared/plugin.model';
import { CdnSourceStrategy } from '../strategies/cdn-source.strategy';
import { NpmSourceStrategy } from '../strategies/npm-source.strategy';
import { DinarySourceStrategy } from '../strategies/dinary-source.strategy';

export class SourceStrategyFactory {
	static getStrategy(type: PluginSourceType): ISourceStrategy {
		switch (type) {
			case PluginSourceType.CDN:
				return new CdnSourceStrategy();
			case PluginSourceType.NPM:
				return new NpmSourceStrategy();
			case PluginSourceType.DINARY:
				return new DinarySourceStrategy();
			default:
				throw new Error(`Unsupported source type: ${type}`);
		}
	}
}
