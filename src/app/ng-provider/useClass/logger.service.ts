import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
	constructor() {}
	
	private logo: string = 'Logger';
	
	public log(str: string) {
		return `${this.logo}：${str}`;
	}
}