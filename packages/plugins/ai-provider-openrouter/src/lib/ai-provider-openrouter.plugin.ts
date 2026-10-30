import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { openRouterProviderDefinition } from './ai-provider-openrouter.provider';

/**
 * AiProviderOpenRouterPlugin
 *
 * Contributes the OpenRouter provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link openRouterProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderOpenRouterPlugin extends BaseAiProviderPlugin {
	protected readonly definition = openRouterProviderDefinition;
}
