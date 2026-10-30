import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbPopoverModule, NbSelectModule } from '@nebular/theme';
import { TranslatePipe } from '@ngx-translate/core';
import { TimesheetFilterService } from '../../../services/timesheet';
import { PipeModule } from './../../../../time-tracker/pipes/pipe.module';
import { DinaryFiltersComponent } from './dinary-filters.component';

@NgModule({
    exports: [DinaryFiltersComponent],
    imports: [
        CommonModule,
        FormsModule,
        NbButtonModule,
        NbCardModule,
        NbIconModule,
        NbPopoverModule,
        NbSelectModule,
        NgxSliderModule,
        TranslatePipe,
        PipeModule,
        DinaryFiltersComponent
    ],
    providers: [TimesheetFilterService]
})
export class DinaryFiltersModule {}
