import { ActivityWatchEventType } from '@dinary/contracts';

export interface IDesktopEvent {
	id?: number;
	eventId: number;
	timerId: number;
	duration: number;
	data: string;
	recordedAt: string;
	timeSlotId: string;
	type: ActivityWatchEventType;
}
