import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private isCalled: boolean;

  private logo: string = 'Logger';

  constructor() {
    // 区分父类调用和子类通过继承调用
    console.info(new.target);
    this.isCalled = new.target !== LoggerService;
  }

  public log(str: string) {
    return this.isCalled ? str : `${this.logo}：${str}`;
  }
}
