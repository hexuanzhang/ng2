import { Component, OnInit, Optional,  } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
	selector: 'optional',
	templateUrl: './optional.html',
	providers: [LoggerService]
})
export class OptionalComponent implements OnInit {

	constructor(@Optional() public logger: LoggerService ) {
	  console.info(this.logger);
	}

	ngOnInit() {
	}

}
