import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundApproverComponent } from './fund-approver.component';

describe('FundApproverComponent', () => {
  let component: FundApproverComponent;
  let fixture: ComponentFixture<FundApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
