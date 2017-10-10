import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customKeyboardDirective]'
})
export class CustomKeyboardDirective {

  constructor(private el: ElementRef) {
  }

}
