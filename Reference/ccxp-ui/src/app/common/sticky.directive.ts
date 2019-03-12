import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[appSticky]'
})

export class StickyDirective {
  private minY: number;
  private className: string;

  @Input('stickMin') set stickMin(minY: number) {
    this.minY = minY;
  }

  @Input('stickClass') set stickClass(className: string) {
    this.className = className;
  }

  constructor(private element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(e) {
    if (window.pageYOffset > this.minY) {
      this.element.nativeElement.classList.add(this.className);
    } else {
      this.element.nativeElement.classList.remove(this.className);
    }
  }
}
