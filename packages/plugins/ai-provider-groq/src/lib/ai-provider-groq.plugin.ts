import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { groqProviderDefinition } from './ai-provider-groq.provider';

/**
 * AiProviderGroqPlugin
 *
 * Contributes the Groq provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link groqProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderGroqPlugin extends BaseAiProviderPlugin {
	protected readonly definition = groqProviderDefinition;
}
