import { Component, Inject } from '@angular/core';

import { Config } from './config';
import { USEVALUE_CONFIG, Use_Value_CONFIG } from './useValue.config';

@Component({
	selector: 'useValue',
	templateUrl: './useValue.html',
	providers: [{ provide: USEVALUE_CONFIG, useValue: Use_Value_CONFIG }]
})
export class UseValueComponent {
	title: string;

	constructor( @Inject(USEVALUE_CONFIG) public config: Config) {
		this.title = this.config.title;
	}
}
