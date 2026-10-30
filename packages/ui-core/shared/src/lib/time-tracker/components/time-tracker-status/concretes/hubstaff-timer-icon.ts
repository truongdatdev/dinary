import { faArrowsTurnToDots } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@dinary/contracts';
import { TimerIcon } from '@dinary/ui-core/core';

export class HubstaffTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.HUBSTAFF;
		this.name = faArrowsTurnToDots;
	}
}
