import { NgModule } from '@angular/core';
import { NgDiRouter } from '../routers/ng-di.router';
import { NgDiComponent } from './ng-di.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [NgDiRouter, SharedModule.share()],
	declarations: [NgDiComponent],
	exports: []
})
export class NgDiModule {
}
