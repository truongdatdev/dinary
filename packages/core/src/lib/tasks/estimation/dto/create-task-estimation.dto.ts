import { ITaskEstimation } from '@dinary/contracts';
import { TaskEstimationDTO } from './task-estimation.dto';

export class CreateTaskEstimationDTO
	extends TaskEstimationDTO
	implements ITaskEstimation {}
