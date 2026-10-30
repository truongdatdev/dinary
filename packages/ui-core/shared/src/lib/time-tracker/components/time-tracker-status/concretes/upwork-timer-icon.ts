import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@dinary/contracts';
import { TimerIcon } from '@dinary/ui-core/core';

export class UpworkTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.UPWORK;
		this.name = faArrowTurnUp;
	}
}
