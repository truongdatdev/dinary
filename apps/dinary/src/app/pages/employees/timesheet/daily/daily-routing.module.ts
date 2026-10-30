import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkQueryParamsResolver } from '@dinary/ui-core/core';
import { DateRangePickerResolver } from '@dinary/ui-core/shared';
import { DailyComponent } from './daily/daily.component';

const routes: Routes = [
	{
		path: '',
		component: DailyComponent,
		data: {
			datePicker: {
				unitOfTime: 'day',
				isLockDatePicker: true,
				isSingleDatePicker: true
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
export class DailyRoutingModule {}
