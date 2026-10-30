import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDinarySource, PluginSourceType } from '@dinary/contracts';
import { SourceCreator } from '../source.creator';

export class DinarySourceCreator extends SourceCreator {
	public createSource(source?: IDinarySource): FormGroup {
		const base = this.createBaseSource(PluginSourceType.DINARY, source);
		return new FormGroup({
			...base,
			file: new FormControl(source?.file || null, Validators.required)
		});
	}
}
