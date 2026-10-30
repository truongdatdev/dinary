import { ICommand } from '@nestjs/cqrs';
import { IAppIntegrationConfig } from '@dinary/common';
import { IOrganizationTeamJoinRequestCreateInput, LanguagesEnum } from '@dinary/contracts';

export class OrganizationTeamJoinRequestCreateCommand implements ICommand {
	static readonly type = '[Organization Team Join Request] Create';

	constructor(
		public readonly input: IOrganizationTeamJoinRequestCreateInput & Partial<IAppIntegrationConfig>,
		public readonly languageCode: LanguagesEnum
	) {}
}
