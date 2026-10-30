import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkQueryParamsResolver } from '@dinary/ui-core/core';
import { DateRangePickerResolver } from '@dinary/ui-core/shared';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';

const routes: Routes = [
	{
		path: '',
		component: ExpensesReportComponent,
		data: {
			datePicker: {
				unitOfTime: 'week'
			}
		},
		resolve: {
			dates: DateRangePickerResolver,
			bookmarkParams: BookmarkQueryParamsResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ExpensesReportRoutingModule {}
