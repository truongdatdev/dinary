import { Component, OnDestroy, Input, ErrorHandler, ChangeDetectionStrategy } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { IHelpCenter } from '@dinary/contracts';
import { TranslationBaseComponent } from '@dinary/ui-core/i18n';
import { HelpCenterService } from '@dinary/ui-core/core';

@Component({
    selector: 'ga-delete-base',
    templateUrl: 'delete-base.component.html',
    styleUrls: ['delete-base.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DeleteBaseComponent extends TranslationBaseComponent implements OnDestroy {
	@Input() base: IHelpCenter;

	constructor(
		protected readonly dialogRef: NbDialogRef<DeleteBaseComponent>,
		public readonly translateService: TranslateService,
		private readonly helpCenterService: HelpCenterService,
		private readonly errorHandler: ErrorHandler
	) {
		super(translateService);
	}

	async deleteBase() {
		try {
			await this.helpCenterService.delete(this.base.id);
		} catch (error) {
			this.errorHandler.handleError(error);
		}
		this.dialogRef.close(this.base);
	}

	closeDialog() {
		this.dialogRef.close();
	}

	ngOnDestroy() {}
}
