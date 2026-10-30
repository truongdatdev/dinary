import { ICommand } from '@nestjs/cqrs';
import { IUserCreateInput } from '@dinary/contracts';

export class UserCreateCommand implements ICommand {
	static readonly type = '[User] Create';

	constructor(public readonly input: IUserCreateInput) {}
}
