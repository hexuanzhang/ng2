import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgTemplateOutletComponent } from './ng-template-outlet.component';
import { SharedModule } from '../../shared/shared.module';

const component = NgTemplateOutletComponent;

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

export class NgTemplateOutleteModule {
}
