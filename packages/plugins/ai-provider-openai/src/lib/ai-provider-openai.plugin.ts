import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { openAiProviderDefinition } from './ai-provider-openai.provider';

/**
 * AiProviderOpenAiPlugin
 *
 * Contributes the OpenAI provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link openAiProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderOpenAiPlugin extends BaseAiProviderPlugin {
	protected readonly definition = openAiProviderDefinition;
}
