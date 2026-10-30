import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TimeLogSourceEnum } from '@dinary/contracts';

export interface ITimerIcon {
	source: TimeLogSourceEnum;
	name: IconDefinition;
}
