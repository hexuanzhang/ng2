import { NgModule } from '@angular/core';
import { NgDirectiveRoutingModule } from '../routers/ng-directive.router';
import { NgDirectiveComponent } from './ng-directive.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	imports: [NgDirectiveRoutingModule, SharedModule.share()],
	declarations: [ NgDirectiveComponent ],
	exports: []
})
export class NgDirectiveModule {}
