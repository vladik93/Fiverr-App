import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightLanguageComponent } from './highlight-language.component';

describe('HighlightLanguageComponent', () => {
  let component: HighlightLanguageComponent;
  let fixture: ComponentFixture<HighlightLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
