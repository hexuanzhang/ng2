import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	constructor() {}
	
	get user() {
		return {
			name: `test`
		}
	}
}