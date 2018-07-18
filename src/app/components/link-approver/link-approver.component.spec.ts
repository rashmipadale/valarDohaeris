import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkApproverComponent } from './link-approver.component';

describe('LinkApproverComponent', () => {
  let component: LinkApproverComponent;
  let fixture: ComponentFixture<LinkApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
