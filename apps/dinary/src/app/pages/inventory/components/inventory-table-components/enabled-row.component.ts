import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    template: `<div>
		  @if (!value) {
		    <div>
		      <div class="badge badge-disabled">
		        {{ 'INVENTORY_PAGE.INACTIVE' | translate }}
		      </div>
		    </div>
		  }
		  @if (value) {
		    <div>
		      <div class="badge badge-success">
		        {{ 'INVENTORY_PAGE.ACTIVE' | translate }}
		      </div>
		    </div>
		  }
		</div>`,
    styles: [
        `
			.badge-disabled {
				background-color: #ccc;
			}

			/* Same status-pill pattern as employee-work-status; sized from the
			   shared table-density tokens ($dinary-density in themes.scss).
			   Literals are CSS-var fallbacks only. */
			.badge {
				text-align: center;
				border-radius: 4px;
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
export class EnabledStatusComponent {
	@Input() value: any;
	@Input() rowData: any;
}
