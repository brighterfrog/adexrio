import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: 'input[appIntegersOnly]'
})
export class IntegersOnlyDirective {

    constructor(private element: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }): void {
        const initalValue = this.element.nativeElement.value;
        this.element.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this.element.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
