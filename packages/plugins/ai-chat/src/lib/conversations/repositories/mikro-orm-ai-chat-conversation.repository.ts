import { MikroOrmBaseEntityRepository } from '@dinary/core';
import { AiChatConversation } from '../ai-chat-conversation.entity';

export class MikroOrmAiChatConversationRepository extends MikroOrmBaseEntityRepository<AiChatConversation> {}
