import { IntersectionType } from '@nestjs/swagger';
import { TenantOrganizationBaseDTO } from '@dinary/core';
import { IJobPreset } from '@dinary/contracts';

/**
 * Data Transfer Object for creating job presets.
 */
export class CreateJobPresetDTO extends IntersectionType(TenantOrganizationBaseDTO) implements IJobPreset {}
