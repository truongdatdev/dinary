import { ITenantUpdateInput } from "@dinary/contracts";
import { TenantDTO } from "./tenant.dto";

export class UpdateTenantDTO extends TenantDTO implements ITenantUpdateInput {}