import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[highlight]'
})
export class HighlightDirective {
	constructor(private el: ElementRef, private renderer: Renderer) {
	}

	@HostListener('document:click', ['$event'])
	onClick(e: Event) {
		if (this.el.nativeElement.contains(e.target)) {
			this.highlight('yellow');
		} else {
			this.highlight(null);
		}
	}

	highlight(color: string) {
		this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
	}
}
