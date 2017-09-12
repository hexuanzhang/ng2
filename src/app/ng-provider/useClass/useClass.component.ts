import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { BetterLoggerService } from './betterLogger.service';
import {UserService} from './user.service';

@Component({
	selector: 'useClass',
	templateUrl: './useClass.html',
	providers: [UserService, LoggerService, { provide: BetterLoggerService, useClass: BetterLoggerService}]
})
export class UseClassComponent implements OnInit {
	constructor(public logger: LoggerService, public betterLogger: BetterLoggerService) {
	}
	
	message: string;
	betterMessage: string;
	
	ngOnInit() {
		this.message = this.logger.log('useClass');
		this.betterMessage = this.betterLogger.log('userClass');
	}
}