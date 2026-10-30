import { ICommand } from '@nestjs/cqrs';
import { IProductCreateInput } from '@dinary/contracts';

export class ProductCreateCommand implements ICommand {
	static readonly type = '[Product] Register';

	constructor(public readonly productInput: IProductCreateInput) {}
}
