import { IQuery } from '@nestjs/cqrs';
import { IEmployeeStatisticsHistoryFindInput } from '@dinary/contracts';

export class EmployeeStatisticsHistoryQuery implements IQuery {
	static readonly type = '[EmployeeStatistics] History';

	constructor(public readonly input: IEmployeeStatisticsHistoryFindInput) {}
}
