import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReconfirmComponent } from './account-reconfirm.component';

describe('AccountReconfirmComponent', () => {
  let component: AccountReconfirmComponent;
  let fixture: ComponentFixture<AccountReconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountReconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountReconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
