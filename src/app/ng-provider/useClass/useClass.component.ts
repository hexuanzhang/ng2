import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
	selector: 'useClass',
	templateUrl: './useClass.html',
	providers: [LoggerService]
})
export class UseClassComponent implements OnInit {
	constructor(public logger: LoggerService) {
	}
	
	message: string;
	
	ngOnInit() {
		this.message = this.logger.log('useClass');
	}
}