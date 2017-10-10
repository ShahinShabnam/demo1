import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'customKeyboardPipe'
})
@Injectable()
export class CustomKeyboardPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
