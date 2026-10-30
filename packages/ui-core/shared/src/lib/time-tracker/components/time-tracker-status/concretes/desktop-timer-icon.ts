import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@dinary/contracts';
import { TimerIcon } from '@dinary/ui-core/core';

export class DesktopTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.DESKTOP;
		this.name = faDesktop;
	}
}
