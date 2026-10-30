import { DataSource } from "typeorm";
import { environment } from "@dinary/config";
import { FileStorageProviderEnum, ITenant } from "@dinary/contracts";
import { TenantSetting } from "./tenant-setting.entity";

/**
 *
 * @param dataSource
 * @param tenants
 * @returns
 */
export const createDefaultTenantSetting = async (
	dataSource: DataSource,
	tenants: ITenant[]
): Promise<TenantSetting[]> => {
	try {
		const settings: TenantSetting[] = [];
		for await (const tenant of tenants) {
			const setting = new TenantSetting();
			setting.name = 'fileStorageProvider';
			setting.value = (environment.fileSystem.name).toUpperCase() || FileStorageProviderEnum.LOCAL;
			setting.tenant = tenant;
			settings.push(setting);
		}
		return await dataSource.manager.save(settings);
	} catch (error) {
		console.log({ error })
	}
};
