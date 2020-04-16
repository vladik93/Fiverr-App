import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsModalComponent } from './ads-modal.component';

describe('AdsModalComponent', () => {
  let component: AdsModalComponent;
  let fixture: ComponentFixture<AdsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
