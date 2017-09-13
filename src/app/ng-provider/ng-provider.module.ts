import { NgModule } from '@angular/core';
import { NgProviderRouter } from '../routers/ng-provider.router';
import { NgProviderComponent } from './ng-provider.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [NgProviderRouter, SharedModule.share()],
	declarations: [NgProviderComponent],
	exports: []
})
export class NgProviderModule {
}
