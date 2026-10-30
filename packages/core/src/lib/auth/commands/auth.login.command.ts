import { ICommand } from '@nestjs/cqrs';
import { IUserLoginInput } from '@dinary/contracts';

export class AuthLoginCommand implements ICommand {
	static readonly type = '[Auth] Login';

	constructor(public readonly input: IUserLoginInput) {}
}
