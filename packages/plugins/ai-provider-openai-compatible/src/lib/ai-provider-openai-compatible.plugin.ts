import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { openAiCompatibleProviderDefinition } from './ai-provider-openai-compatible.provider';

/**
 * AiProviderOpenAiCompatiblePlugin
 *
 * Contributes the OpenAI-compatible provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link openAiCompatibleProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderOpenAiCompatiblePlugin extends BaseAiProviderPlugin {
	protected readonly definition = openAiCompatibleProviderDefinition;
}
