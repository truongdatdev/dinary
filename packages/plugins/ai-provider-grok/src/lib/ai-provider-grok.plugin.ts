import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { grokProviderDefinition } from './ai-provider-grok.provider';

/**
 * AiProviderGrokPlugin
 *
 * Contributes the Grok provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link grokProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderGrokPlugin extends BaseAiProviderPlugin {
	protected readonly definition = grokProviderDefinition;
}
