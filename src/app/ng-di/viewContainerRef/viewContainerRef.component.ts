import { Component, OnInit,  AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'viewContainerRef',
	templateUrl: './viewContainerRef.html'
})
export class ViewContainerRefComponent implements OnInit, AfterViewInit {
	@ViewChild('tpl') tpl;
	@ViewChild('container', { read: ViewContainerRef }) _vcr: ViewContainerRef;

	/**
	 *  ViewContainerRef：将新组件或元素插入至容器后方（相邻）
	 *
	 */
	constructor(private vcr: ViewContainerRef) {
		// console.info('constructor：', this.tpl);
	}

	ngOnInit() {
		// console.info('ngOnInit：', this.tpl);

		// this.vcr 指向 host 元素
		this.vcr.createEmbeddedView(this.tpl);
		this._vcr.createEmbeddedView(this.tpl);
	}

	ngAfterViewInit() {
		// console.info('ngAfterViewInit：', this.tpl);
	}

}
