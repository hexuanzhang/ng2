import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgForComponent } from './ng-for.component';
import { ContactCardComponent } from './contact-card.component';
import { SharedModule } from '../../shared/shared.module';

const component = NgForComponent;

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
	declarations: [component, ContactCardComponent],
	providers: []
})

export class NgForModule {
}
