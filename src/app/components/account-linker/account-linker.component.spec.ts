import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLinkerComponent } from './account-linker.component';

describe('AccountLinkerComponent', () => {
  let component: AccountLinkerComponent;
  let fixture: ComponentFixture<AccountLinkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLinkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
