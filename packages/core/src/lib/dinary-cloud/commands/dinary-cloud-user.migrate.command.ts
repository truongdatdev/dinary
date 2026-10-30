import { ICommand } from '@nestjs/cqrs';
import { IUserRegistrationInput } from '@dinary/contracts';

export class DinaryCloudUserMigrateCommand implements ICommand {
	static readonly type = '[Dinary Cloud] User Migrate';

	constructor(public readonly input: IUserRegistrationInput) {}
}