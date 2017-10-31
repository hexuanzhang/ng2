import { Component, OnInit } from '@angular/core';
import { trigger,query, animate, animateChild, transition, keyframes, style} from '@angular/animations';

import { menus } from './cofig/menus';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%' })
          , { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
	constructor() {}

	menu: any[] = menus;

	ngOnInit() {}

  getRouteAnimation(outlet: any) {
	  // console.warn(outlet.activatedRouteData.animation);
    return outlet.activatedRouteData.animation;
  }
}
