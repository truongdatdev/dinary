import { IDinarySource, IPluginSource } from '@dinary/contracts';
import { ISourceStrategy } from '../../shared/plugin.model';

export class DinarySourceStrategy implements ISourceStrategy<IDinarySource> {
	public appendToFormData(formData: FormData, source: IDinarySource): void {
		if (!source.file || !(source.file instanceof File)) {
			throw new Error('File is required for Dinary Source.');
		}
		formData.append('file', source.file);
	}

	public getSourceData(source: IDinarySource): Partial<IPluginSource> {
		return {
			fileName: source.file.name
		};
	}
}
