import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable()
export class BetterLoggerService extends LoggerService {
	constructor(public user: UserService) {
		super()
	}
	
	public _logo: string = 'betterLogger';
	
	public log(str: string) {
		return super.log(`${this._logo}：${str}  by ${this.user.user.name}`);
	}
}