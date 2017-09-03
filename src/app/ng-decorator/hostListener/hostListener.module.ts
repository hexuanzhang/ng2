import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostListenerComponent } from './hostListener.component';
import { HostListenerDirective } from './hostListener.directive';
import { SharedModule } from '../../shared/shared.module';

const component = HostListenerComponent;

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
	declarations: [component, HostListenerDirective],
	providers: []
})

export class NgClassModule {
}