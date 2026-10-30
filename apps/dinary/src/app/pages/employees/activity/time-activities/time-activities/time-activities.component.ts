import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ITimeLogFilters, ReportGroupByFilter, ReportGroupFilterEnum } from '@dinary/contracts';
import { DateRangePickerBuilderService, TimesheetFilterService } from '@dinary/ui-core/core';
import { DinaryFiltersComponent } from '@dinary/ui-core/shared';

@Component({
	selector: 'dinary-time-activities',
	templateUrl: './time-activities.component.html',
	styleUrls: ['./time-activities.component.scss'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class TimeActivitiesComponent implements OnInit {
	filters: ITimeLogFilters;
	datePickerConfig$: Observable<any> = this.dateRangePickerBuilderService.datePickerConfig$;

	groupBy: ReportGroupByFilter = ReportGroupFilterEnum.date;
	readonly ReportGroupFilterEnum = ReportGroupFilterEnum;

	@ViewChild(DinaryFiltersComponent) dinaryFiltersComponent: DinaryFiltersComponent;

	constructor(
		private readonly timesheetFilterService: TimesheetFilterService,
		public readonly dateRangePickerBuilderService: DateRangePickerBuilderService
	) {}

	filtersChange(filters: ITimeLogFilters) {
		if (this.dinaryFiltersComponent.saveFilters) {
			this.timesheetFilterService.filter = filters;
		}
		this.filters = Object.assign({}, filters);
	}

	ngOnInit(): void {}
}
