import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomKeyboardComponent } from './custom-keyboard.component';
import { CustomKeyboardDirective } from './custom-keyboard.directive';
import { CustomKeyboardPipe } from './custom-keyboard.pipe';
import { CustomKeyboardService } from './custom-keyboard.service';
import { FormsModule} from '@angular/forms';

export * from './custom-keyboard.component';
export * from './custom-keyboard.directive';
export * from './custom-keyboard.pipe'; 
export * from './custom-keyboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],

  declarations: [
    CustomKeyboardComponent,
    CustomKeyboardDirective,
    CustomKeyboardPipe,
   
  ],
  exports: [
    CustomKeyboardComponent,
    CustomKeyboardDirective,
    CustomKeyboardPipe,
]
})
export class CustomKeyboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomKeyboardModule,
      providers: [CustomKeyboardService]
    };
  }
}
