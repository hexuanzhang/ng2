import { Component, OnInit, Inject } from '@angular/core';
import { FEATURE_ENABLED, APP_INFO } from './config';

const PROVIDE_TOKENS = ['app_info', 'feature_enabled'];

@Component({
	selector: 'stringToken',
	templateUrl: './stringToken.html',
	providers: [
		{ provide: PROVIDE_TOKENS[0], useValue: APP_INFO },
		{ provide: PROVIDE_TOKENS[1], useValue: FEATURE_ENABLED }
	]
})
export class StringTokenComponent implements OnInit {
	
	constructor(@Inject(PROVIDE_TOKENS[0]) private appInfo,
	            @Inject(PROVIDE_TOKENS[1]) private featureEnabled) {
	}
	
	app: any = {
		version: '--',
		name: '--'
	};
	
	ngOnInit() {
		this.featureEnabled && (this.app = this.appInfo);
	}
	
}
