import { Component, OnInit, ReflectiveInjector, Injector, Injectable } from '@angular/core';

@Injectable()
class Square {
  name: 'square'
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
  selector: 'reflectiveInjector',
  templateUrl: './reflectiveInjector.html'
})
export class ReflectiveInjectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const square_injector: Injector = ReflectiveInjector.resolveAndCreate([Square]),
      square: Square = square_injector.get(Square);
    console.info(square instanceof Square, square);

    const engine_injector = ReflectiveInjector.resolveAndCreate([Engine]),
      car_injector: Injector = engine_injector.resolveAndCreateChild([Car]);
  }

}
