import { ICommand } from '@nestjs/cqrs';
import { IImageAssetCreateInput } from '@dinary/contracts';

export class ImageAssetCreateCommand implements ICommand {
	static readonly type = '[Image Asset] Create';

	constructor(
		public readonly input: IImageAssetCreateInput
	) { }
}
