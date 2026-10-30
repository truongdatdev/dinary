import { ICommand } from '@nestjs/cqrs';
import { IReactionCreateInput } from '@dinary/contracts';

export class ReactionCreateCommand implements ICommand {
	static readonly type = '[Reaction] Create';

	constructor(public readonly input: IReactionCreateInput) {}
}
