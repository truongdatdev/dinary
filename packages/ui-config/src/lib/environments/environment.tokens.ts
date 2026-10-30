import { InjectionToken } from '@angular/core';
import { Environment } from './model';

export const DINARY_ENV = new InjectionToken<Environment>('dinaryEnvironment');
