import { Injectable } from '@angular/core';
import { PluginSourceType } from '@dinary/contracts';
import { CdnSourceCreator } from './concretes/cdn-source.creator';
import { DinarySourceCreator } from './concretes/dinary-source.creator';
import { NpmSourceCreator } from './concretes/npm-source.creator';
import { SourceCreator } from './source.creator';

@Injectable({
	providedIn: 'root'
})
export class SourceContext {
	private creators: Map<PluginSourceType, SourceCreator> = new Map();

	constructor() {
		this.creators.set(PluginSourceType.CDN, new CdnSourceCreator());
		this.creators.set(PluginSourceType.NPM, new NpmSourceCreator());
		this.creators.set(PluginSourceType.DINARY, new DinarySourceCreator());
	}

	public getCreator(type: PluginSourceType): SourceCreator {
		const creator = this.creators.get(type);
		if (!creator) {
			throw new Error(`No creator found for source type: ${type}`);
		}
		return creator;
	}
}
