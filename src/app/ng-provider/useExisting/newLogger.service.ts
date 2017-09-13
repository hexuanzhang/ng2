import { Injectable } from '@angular/core';

@Injectable()
export class NewLoggerService {
	private logo: string = 'newLogger';
	
	constructor() {
	}
	
	public log(str: string) {
		return `${this.logo}：${str}`;
	}
}