import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ViewChildComponent } from './viewChild.component';
import { NumberComponent } from './number.component';
import { ChangeColorDirective } from './changeColor.directive'

const component = ViewChildComponent;

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
	declarations: [component, NumberComponent, ChangeColorDirective],
	providers: []
})

export class ViewChildModule {
}