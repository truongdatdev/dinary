import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';
import { TaskStatusEnum } from '@dinary/contracts';

@Component({
    selector: 'ngx-status-view',
    templateUrl: './status-view.component.html',
    styles: [
        `
			:host {
				display: flex;
			}
			/* Status pill in a smart-table cell. Sized from the shared
			   table-density tokens ($dinary-density in themes.scss); the
			   literals are CSS-var fallbacks only. 'align-items: center'
			   below is what makes the explicit height safe to shrink. */
			.badge {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				position: relative;
				width: fit-content;
				height: var(--dinary-table-badge-height, 1.25rem);
				padding: var(--dinary-table-chip-padding-y, 0.0625rem) var(--dinary-table-chip-padding-x, 0.375rem);
				white-space: nowrap;
				font-size: var(--dinary-table-header-font-size, 0.75rem);
				font-weight: 600;
				line-height: var(--dinary-table-header-line-height, 0.9375rem);
				letter-spacing: 0em;
				text-align: left;
			}
		`
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class StatusViewComponent implements OnInit {
	@Input() value: string;
	@Input() rowData: any;
	status: NbComponentStatus;

	ngOnInit(): void {
		switch (this.value) {
			case TaskStatusEnum.OPEN:
				this.status = 'basic';
				break;
			case TaskStatusEnum.IN_PROGRESS:
				this.status = 'info';
				break;
			case TaskStatusEnum.READY_FOR_REVIEW:
				this.status = 'info';
				break;
			case TaskStatusEnum.IN_REVIEW:
				this.status = 'info';
				break;
			case TaskStatusEnum.COMPLETED:
				this.status = 'success';
				break;
			case TaskStatusEnum.BLOCKED:
				this.status = 'danger';
				break;
			default:
				this.status = 'basic';
				break;
		}
	}
}
