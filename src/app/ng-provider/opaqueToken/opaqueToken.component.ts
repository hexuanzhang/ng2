/**
 *  OpaqueToken will be removed in angular 5
 *
 *  https://github.com/SebastianM/angular-google-maps/issues/1135
 *  https://alligator.io/angular/angular-5/
 */

// import { Component, OnInit, Inject, OpaqueToken } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';

import { FEATURE_ENABLED, APP_INFO } from './config';

// const PROVIDE_TOKENS = [new OpaqueToken('app_info'), new OpaqueToken('feature_enabled')];
const PROVIDE_TOKENS = ['app_info', 'feature_enabled'];

@Component({
	selector: 'opaqueToken',
	templateUrl: './opaqueToken.html',
	providers: [
		{ provide: PROVIDE_TOKENS[0], useValue: APP_INFO },
		{ provide: PROVIDE_TOKENS[1], useValue: FEATURE_ENABLED }
	]
})
export class OpaqueTokenComponent implements OnInit {
	
	constructor(@Inject(PROVIDE_TOKENS[0]) private appInfo,
	            @Inject(PROVIDE_TOKENS[1]) private featureEnabled) {
	}
	
	app: any = {
		version: '--',
		name: '--'
	};
	
	ngOnInit() {
		// console.info(new OpaqueToken('test') === new OpaqueToken('test'));
		
		this.featureEnabled && (this.app = this.appInfo);
	}
	
}
