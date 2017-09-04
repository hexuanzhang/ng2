import { NgModule } from '@angular/core';
import { NgCoreRouterModule } from '../routers/ng-core.router';
import { NgCoreComponent } from './ng-core.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [NgCoreRouterModule, SharedModule.share()],
	declarations: [NgCoreComponent],
	exports: []
})
export class NgCoreModule {
}
