import { faBox } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@dinary/contracts';
import { TimerIcon } from '@dinary/ui-core/core';

export class BrowserExtensionTimerIcon extends TimerIcon {
	constructor() {
		super();
		this.source = TimeLogSourceEnum.BROWSER_EXTENSION;
		this.name = faBox;
	}
}
