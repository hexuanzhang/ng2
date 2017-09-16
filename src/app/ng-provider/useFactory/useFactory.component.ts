import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { LoginService } from './login.service';
import { LoginServiceFactory } from './login.factory';
import { UserService } from './user.service';

@Component({
  selector: 'useFactory',
  templateUrl: './useFactory.html',
  providers: [LoggerService, UserService, {
    provide: LoginService,
    useFactory: LoginServiceFactory,
    deps: [LoggerService, UserService]
  }]
})
export class UseFactoryComponent implements OnInit {
  constructor(public login: LoginService) {
  }
  
  status: string;
  
  ngOnInit() {
    this.status = this.login.loginStatus;
  }
}
