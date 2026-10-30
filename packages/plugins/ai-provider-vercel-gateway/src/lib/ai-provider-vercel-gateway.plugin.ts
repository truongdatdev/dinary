import { DinaryCorePlugin as Plugin } from '@dinary/plugin';
import { BaseAiProviderPlugin } from '@dinary/plugin-ai-chat';
import { vercelGatewayProviderDefinition } from './ai-provider-vercel-gateway.provider';

/**
 * AiProviderVercelGatewayPlugin
 *
 * Contributes the Vercel AI Gateway provider to the AI chat engine
 * (`@dinary/plugin-ai-chat`) by registering {@link vercelGatewayProviderDefinition}
 * with the provider registry on bootstrap (see {@link BaseAiProviderPlugin}).
 */
@Plugin({})
export class AiProviderVercelGatewayPlugin extends BaseAiProviderPlugin {
	protected readonly definition = vercelGatewayProviderDefinition;
}
