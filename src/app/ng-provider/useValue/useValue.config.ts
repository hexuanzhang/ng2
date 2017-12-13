import { InjectionToken } from '@angular/core';
import { Config } from './config';


export const Use_Value_CONFIG: Config = {
	title: 'useValue config'
};

export const USEVALUE_CONFIG = new InjectionToken<Config>('config');
