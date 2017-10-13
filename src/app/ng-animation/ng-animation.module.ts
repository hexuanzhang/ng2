import { NgModule } from '@angular/core';
import { NgAnimationRouter } from '../routers/ng-animation.router';
import { NgAnimationComponent } from './ng-animation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [NgAnimationRouter, SharedModule.share()],
	declarations: [NgAnimationComponent],
	exports: []
})
export class NgAnimationModule {
}
