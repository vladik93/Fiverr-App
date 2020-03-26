import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTranslatorComponent } from './feature-translator.component';

describe('FeatureTranslatorComponent', () => {
  let component: FeatureTranslatorComponent;
  let fixture: ComponentFixture<FeatureTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
