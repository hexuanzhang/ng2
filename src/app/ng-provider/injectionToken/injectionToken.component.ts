import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FEATURE_ENABLED, APP_INFO } from './config';
import { Observable } from 'Rxjs';

const PROVIDE_TOKENS = [new InjectionToken<string>('app_info'), new InjectionToken<string>('feature_enabled')];

@Component({
	selector: 'injectionToken',
	templateUrl: './injectionToken.html',
	providers: [
		{ provide: PROVIDE_TOKENS[0], useValue: APP_INFO },
		{ provide: PROVIDE_TOKENS[1], useValue: FEATURE_ENABLED }
	]
})
export class InjectionTokenComponent implements OnInit {

	constructor( @Inject(PROVIDE_TOKENS[0]) private appInfo, @Inject(PROVIDE_TOKENS[1]) private featureEnabled) {
	}

	app: any = {
		version: '--',
		name: '--'
	};

	ngOnInit() {
		// console.info(new InjectionToken<string>('test') === new InjectionToken<string>('test'));

		if (this.featureEnabled) {
			this.app = this.appInfo;
		}
	}

}
