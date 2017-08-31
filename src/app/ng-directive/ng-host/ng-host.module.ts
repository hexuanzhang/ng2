import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { NgHostComponent } from './ng-host.component';
import { NgDeepComponent } from './ng-deep.component';

const component = NgHostComponent;

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
	declarations: [component, NgDeepComponent],
	providers: []
})

export class NgHostModule {
}