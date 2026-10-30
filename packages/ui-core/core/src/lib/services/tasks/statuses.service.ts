import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITaskStatus } from '@dinary/contracts';
import { API_PREFIX } from '@dinary/ui-core/common';
import { CrudService } from '../crud/crud.service';

@Injectable({
	providedIn: 'root'
})
export class TaskStatusesService extends CrudService<ITaskStatus> {
	static readonly API_URL = `${API_PREFIX}/task-statuses`;

	constructor(http: HttpClient) {
		super(http, TaskStatusesService.API_URL);
	}
}
