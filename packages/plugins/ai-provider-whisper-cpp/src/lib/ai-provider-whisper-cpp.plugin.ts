import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { whisperCppProviderDefinition } from './ai-provider-whisper-cpp.provider';

/**
 * AiProviderWhisperCppPlugin
 *
 * Contributes the whisper.cpp provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link whisperCppProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderWhisperCppPlugin extends BaseAiProviderPlugin {
	protected readonly definition = whisperCppProviderDefinition;
}
