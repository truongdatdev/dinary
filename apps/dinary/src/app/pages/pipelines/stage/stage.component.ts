import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IPipelineStage } from '@dinary/contracts';

@Component({
    selector: 'dinary-stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class StageComponent implements OnInit {

	@Input() value: any;

	pipelineStages: IPipelineStage[];

	constructor() { }

	ngOnInit(): void {
		this.pipelineStages = this.value;
	}
}
