import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
	private logo: string = 'Logger';

	constructor() {
	}

	public log(str: string) {
		return `${this.logo}：${str}`;
	}
}
