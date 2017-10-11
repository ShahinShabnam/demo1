import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { CustomKeyboardComponent } from './custom-keyboard.component';

describe('CustomKeyboardComponent', () => {

  let comp:    CustomKeyboardComponent;
  let fixture: ComponentFixture<CustomKeyboardComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomKeyboardComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(CustomKeyboardComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });
});
