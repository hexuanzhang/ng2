import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { NewLoggerService } from './newLogger.service';

@Component({
	selector: 'useExisting',
	templateUrl: './useExisting.html',
	providers: [NewLoggerService, { provide: LoggerService, useExisting: NewLoggerService }]
})
export class UseExistingComponent implements OnInit {
	constructor(public logger: LoggerService, public newLogger: NewLoggerService) {
	}

	message: string;
	newMessage: string;

	ngOnInit() {
		this.message = this.logger.log('useExisting');
		this.newMessage = this.newLogger.log('useExisting');
	}
}
