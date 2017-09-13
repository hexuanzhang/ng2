import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StringTokenComponent } from './stringToken.component';
import { SharedModule } from '../../shared/shared.module';

const component = StringTokenComponent;

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

export class StringTokenModule {
}
