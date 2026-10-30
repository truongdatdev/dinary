import { ICommand } from '@nestjs/cqrs';
import { IEmployeeNotificationSettingCreateInput } from '@dinary/contracts';

export class EmployeeNotificationSettingCreateCommand implements ICommand {
	static readonly type = '[EmployeeNotificationSetting] Create';

	constructor(public readonly input: IEmployeeNotificationSettingCreateInput) {}
}
