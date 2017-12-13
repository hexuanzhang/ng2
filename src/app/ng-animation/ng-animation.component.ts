import { Component } from '@angular/core';
import { trigger, animate, animateChild, transition, keyframes, style } from '@angular/animations';

@Component({
	selector: 'ng-animation',
	templateUrl: './ng-animation.html',
	animations: [
		trigger('routeAnimation', [
			transition('void => *', [
				animate('0.5s ease-out', keyframes([
					style({ opacity: 0, offset: 0 }),
					style({ opacity: 0.25, offset: 0.5 }),
					style({ opacity: 0.5, offset: 1 })
				]))
				// animateChild()
			], { delay: '10s' })
		])
	]
})
export class NgAnimationComponent {
	constructor() {
	}

	getRouteAnimation(outlet: any) {
		return 'firstPage';
	}
}
