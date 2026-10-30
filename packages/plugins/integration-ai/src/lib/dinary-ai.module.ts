import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { DINARY_AI_CONFIG_TOKEN } from '@dinary/constants';
import { DinaryAIService } from './dinary-ai.service';
import dinaryAI from './config/dinary-ai';
import { IConfigurationOptions } from './configuration.interface';
import { RequestConfigProvider } from './request-config.provider';

@Module({
	imports: [
		HttpModule.registerAsync({
			imports: [ConfigModule],
			useFactory: (config: ConfigService) => ({
				baseURL: config.get<string>('dinaryAI.dinaryAIRESTEndpoint'),
				timeout: config.get<number>('dinaryAI.dinaryAIRequestTimeout'),
				maxRedirects: 5,
				headers: {
					'Content-Type': 'application/json',
					apiKey: config.get<string>('dinaryAI.dinaryAiApiKey'),
					apiSecret: config.get<string>('dinaryAI.dinaryAiApiSecret')
				}
			}),
			inject: [ConfigService]
		}),
		ConfigModule.forFeature(dinaryAI) // Make sure to import ConfigModule here
	],
	controllers: [],
	providers: [DinaryAIService, RequestConfigProvider],
	exports: [DinaryAIService, RequestConfigProvider]
})
export class DinaryAIModule {
	/**
	 * Configure the DinaryAI module for integration with Dinary Platform.
	 * @param options Optional configuration options for DinaryAI.
	 * @returns A dynamic module configuration object.
	 */
	static forRoot(options?: IConfigurationOptions): DynamicModule {
		return {
			module: DinaryAIModule,
			imports: [ConfigModule], // Make sure to import ConfigModule here
			providers: [
				{
					provide: DINARY_AI_CONFIG_TOKEN,
					useFactory: (config: ConfigService): IConfigurationOptions => ({
						apiKey: config.get<string>('dinaryAI.dinaryAiApiKey'),
						apiSecret: config.get<string>('dinaryAI.dinaryAiApiSecret'),
						...options
					}),
					inject: [ConfigService]
				}
			],
			exports: [DINARY_AI_CONFIG_TOKEN]
		};
	}
}
