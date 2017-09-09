import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgHiddenComponent } from './ng-hidden.component';
import { SharedModule } from '../../shared/shared.module';

const component = NgHiddenComponent;

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

export class NgHiddenModule {
}