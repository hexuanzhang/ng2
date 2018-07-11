import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgOthersRouter } from '../routers/ng-others.router';
import { NgOthersComponent } from './ng-others.component';


@NgModule({
	imports: [NgOthersRouter, SharedModule.share()],
	declarations: [NgOthersComponent],
	exports: []
})
export class NgOthersModule {
}
