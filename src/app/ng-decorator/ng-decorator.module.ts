import { NgModule } from '@angular/core';
import { NgDecoratorRouterModule } from '../routers/ng-decorator.router';
import { NgDecoratorComponent } from './ng-decorator.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	imports: [NgDecoratorRouterModule, SharedModule.share()],
	declarations: [ NgDecoratorComponent ],
	exports: []
})
export class NgDecoratorModule {}
