import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule, NbCardModule, NbListModule, NbDialogModule } from '@nebular/theme';
import { TranslatePipe } from '@ngx-translate/core';
import { DinaryEditableGridComponent } from './dinary-editable-grid.component';
import { DinaryButtonActionModule } from '../dinary-button-action';

const NbModules = [NbButtonModule, NbIconModule, NbCardModule, NbListModule, NbDialogModule.forChild()];
const OtherModules = [DinaryButtonActionModule];

@NgModule({
	imports: [...NbModules, ...OtherModules, TranslatePipe],
	declarations: [DinaryEditableGridComponent],
	exports: [DinaryEditableGridComponent]
})
export class DinaryEditableGridModule {}
