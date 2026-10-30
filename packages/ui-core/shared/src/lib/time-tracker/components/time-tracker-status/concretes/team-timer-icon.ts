import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@dinary/contracts';
import { TimerIcon } from '@dinary/ui-core/core';

export class TeamTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.TEAMS;
		this.name = faUsers;
	}
}
