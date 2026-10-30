# @dinary/plugin-ai-provider-dinary-ai

Dinary AI provider plugin for the Dinary AI chat engine
([`@dinary/plugin-ai-chat`](../ai-chat)) — currently a **placeholder**.

On bootstrap it registers the `dinary-ai` provider with the chat engine's
`AiProviderRegistry` so the provider appears in the registry and the UI, but
**chat is not routed through Dinary AI yet**: `createModel` throws
`Chat via Dinary AI is not implemented yet — configure another provider.`
and the provider exposes no models. Use one of the direct provider plugins
(`@dinary/plugin-ai-provider-anthropic`, `-openai`, `-openrouter`,
`-vercel-gateway`) in the meantime.

## Environment variables

| Variable            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `DINARY_AI_API_KEY`  | Server-wide Dinary AI API key (reserved for future use).  |
| `DINARY_AI_BASE_URL` | Optional custom Dinary AI API base URL.                   |

## Planned design

When the Dinary AI integration
([`packages/plugins/integration-ai`](../integration-ai)) is enabled for a
tenant, chat requests for the `dinary-ai` provider will be **proxied to the
Dinary AI API**, which manages provider API keys, model selection and routing
server-side — so tenants get chat without configuring any upstream provider
key. BYOK (per-tenant keys via `/api/ai-chat/credentials`) remains the way to
use the direct providers, and continues to take precedence over server
environment variables for those providers.
