import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InjectionTokenComponent } from './injectionToken.component';
import { SharedModule } from '../../shared/shared.module';

const component = InjectionTokenComponent;

const UIRouters: Routes = [
	{
		path: '', component
	}
];

const UIRouting = RouterModule.forChild(UIRouters);

@NgModule({
	imports: [UIRouting],
	exports: [RouterModule]
})
export class RoutingModule {
}

@NgModule({
	imports: [RoutingModule, SharedModule.share()],
	declarations: [component],
	providers: []
})

export class InjectionTokenModule {
}
