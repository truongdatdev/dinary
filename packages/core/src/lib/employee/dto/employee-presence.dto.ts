import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { IEmployeePresenceInput } from '@dinary/contracts';

export class EmployeePresenceDTO implements IEmployeePresenceInput {
	@ApiProperty({ type: () => Boolean })
	@IsBoolean()
	readonly isIdle: boolean;
}
