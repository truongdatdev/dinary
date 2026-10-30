import { ICommand } from '@nestjs/cqrs';
import { IAppIntegrationConfig } from '@dinary/common';
import { IUserRegistrationInput, LanguagesEnum } from '@dinary/contracts';

export class AuthRegisterCommand implements ICommand {
	static readonly type = '[Auth] Register';

	constructor(
		public readonly input: IUserRegistrationInput & Partial<IAppIntegrationConfig>,
		public readonly languageCode: LanguagesEnum
	) {}
}
