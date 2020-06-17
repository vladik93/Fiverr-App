import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmLoginModalComponent } from './sm-login-modal.component';

describe('SmLoginModalComponent', () => {
  let component: SmLoginModalComponent;
  let fixture: ComponentFixture<SmLoginModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmLoginModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
