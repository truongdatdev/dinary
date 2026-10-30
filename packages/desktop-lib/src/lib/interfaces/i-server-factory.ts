import { IProxyConfig, ISsl } from '@dinary/contracts';

export interface ISslFactory {
	createSslConfig(config: IProxyConfig): ISsl;
}
