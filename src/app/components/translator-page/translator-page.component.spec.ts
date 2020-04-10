import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorPageComponent } from './translator-page.component';

describe('TranslatorPageComponent', () => {
  let component: TranslatorPageComponent;
  let fixture: ComponentFixture<TranslatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
