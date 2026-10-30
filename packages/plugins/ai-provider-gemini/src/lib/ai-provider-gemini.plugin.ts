import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { geminiProviderDefinition } from './ai-provider-gemini.provider';

/**
 * AiProviderGeminiPlugin
 *
 * Contributes the Gemini provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link geminiProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderGeminiPlugin extends BaseAiProviderPlugin {
	protected readonly definition = geminiProviderDefinition;
}
