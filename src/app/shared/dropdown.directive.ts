import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private elementRef: ElementRef) {}
  @HostListener('click') toggleDropDown(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:mousedown', ['$event']) onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
