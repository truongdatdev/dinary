import { ITimeLog, TimeLogSourceEnum } from '@dinary/contracts';

export interface IRemoteTimer {
	source: TimeLogSourceEnum;
	running: boolean;
	startedAt: Date;
	stoppedAt: Date;
	lastLog: ITimeLog;
	isExternalSource: boolean;
}
