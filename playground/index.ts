/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CustomKeyboardModule }  from 'demo1';

@Component({
  selector: 'app',
  template: `<custom-keyboard-component></custom-keyboard-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, CustomKeyboardModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
