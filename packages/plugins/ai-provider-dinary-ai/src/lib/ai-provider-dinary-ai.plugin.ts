import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { dinaryAiProviderDefinition } from './ai-provider-dinary-ai.provider';

/**
 * AiProviderDinaryAiPlugin
 *
 * Contributes the Dinary AI (placeholder — chat not routed yet) provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link dinaryAiProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderDinaryAiPlugin extends BaseAiProviderPlugin {
	protected readonly definition = dinaryAiProviderDefinition;
}
