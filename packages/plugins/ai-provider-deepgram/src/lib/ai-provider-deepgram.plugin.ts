import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { deepgramProviderDefinition } from './ai-provider-deepgram.provider';

/**
 * AiProviderDeepgramPlugin
 *
 * Contributes the Deepgram provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link deepgramProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderDeepgramPlugin extends BaseAiProviderPlugin {
	protected readonly definition = deepgramProviderDefinition;
}
