import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseExistingComponent } from './useExisting.component';
import { SharedModule } from '../../shared/shared.module';

const component = UseExistingComponent;

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

export class UseExistingModule {
}
