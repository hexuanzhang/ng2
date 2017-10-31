import { Component, OnInit, ReflectiveInjector, Injector, Injectable } from '@angular/core';

@Component({
  selector: 'viewContainerRef',
  templateUrl: './viewContainerRef.html'
})
export class ViewContainerRefComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.info('viewContainerRef');
  }

}
