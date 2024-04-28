import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSurvolage]'
})
export class SurvolageDirective {

  @HostBinding('style.backgroundColor') myBackgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myBackgroundColor = 'purple';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myBackgroundColor = 'transparent';
  }
}
