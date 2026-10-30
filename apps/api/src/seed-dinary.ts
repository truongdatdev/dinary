import { seedDinary } from '@dinary/core';
import { pluginConfig } from './plugin.config';

seedDinary(pluginConfig).catch((error: any) => {
	console.log(error);
	process.exit(1);
});
