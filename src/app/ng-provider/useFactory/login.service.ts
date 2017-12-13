import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class LoginService {
	constructor(private logger: LoggerService, private isLogin: boolean) {
	}

	get loginStatus() {
		const messags: string[] = ['未登录', '已登录'];

		this.logger.log(`当前用户${messags[+this.isLogin]}`);
		return `${messags[+this.isLogin]}`;
	}
}
