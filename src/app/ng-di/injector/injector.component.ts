import { Component, OnInit, ReflectiveInjector, Injector, Injectable } from '@angular/core';

@Injectable()
class Square {
	name: 'square';
}

@Injectable()
class Engine {
}

@Injectable()
class Car {
	constructor(public engine: Engine) {
	}
}

@Component({
	selector: 'app-injector',
	templateUrl: './injector.html'
})
export class InjectorComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
		const square_injector: Injector = ReflectiveInjector.resolveAndCreate([Square]),
			square: Square = square_injector.get(Square);
		// console.info(square instanceof Square, square.name);

		const engine_injector = ReflectiveInjector.resolveAndCreate([Engine]),
			car_injector: Injector = engine_injector.resolveAndCreateChild([Car]);
	}

}
