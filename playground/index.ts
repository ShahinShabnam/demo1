/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { CustomKeyboardModule, CustomKeyboardService }  from '../src/index';

@Component({
  selector: 'app',
  template: `<custom-keyboard-component></custom-keyboard-component>`,
  
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  // providers:[CustomKeyboardService],
  imports: [ BrowserModule, ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
