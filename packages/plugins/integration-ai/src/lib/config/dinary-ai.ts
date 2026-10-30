import { registerAs } from '@nestjs/config';

/**
 * Dinary AI Configuration
 */
export default registerAs('dinaryAI', () => ({
	dinaryAIGraphQLEndpoint: process.env.DINARY_AI_GRAPHQL_ENDPOINT || null, // GraphQL endpoint for Dinary AI
	dinaryAIRESTEndpoint: process.env.DINARY_AI_REST_ENDPOINT || null, // REST endpoint for Dinary AI
	dinaryAIRequestTimeout: parseInt(process.env.DINARY_AI_REQUEST_TIMEOUT) || 60 * 5 * 1000, // Request timeout for Dinary AI in milliseconds
	dinaryAiApiKey: process.env.DINARY_AI_API_KEY || null, // Dinary AI API key
	dinaryAiApiSecret: process.env.DINARY_AI_API_SECRET || null // Dinary AI API secret
}));
