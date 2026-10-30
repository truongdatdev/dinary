import { FileStorageProviderEnum } from "@dinary/contracts";
import { FileDTO } from "../dtos/file.dto";

export interface IPreparedFile {
	file: FileDTO;
	thumbnail: FileDTO;
	storageProvider: FileStorageProviderEnum;
}
