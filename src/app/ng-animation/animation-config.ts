import { trigger, state, style, transition, animate, keyframes } from  '@angular/animations';
export const LoadingAnimations = [
    trigger('loadingTrigger', [
        transition('void => *, * => *', animate('3.5s linear',keyframes([
          style({transform: 'rotate(0deg)', offset: 0}),
          style({transform: 'rotate(180deg)', offset: 0.5}),
          style({transform: 'rotate(360deg)', offset: 1}),
        ])))
    ])
];
