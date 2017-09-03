import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HostListenerComponent } from './hostListener.component';
import { HostListenerDirective } from './hostListener.directive';
import { HighlightDirective } from './highlight.directive'

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
	declarations: [component, HostListenerDirective, HighlightDirective],
	providers: []
})

export class NgClassModule {
}