import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIssuerComponent } from './card-issuer.component';

describe('CardIssuerComponent', () => {
  let component: CardIssuerComponent;
  let fixture: ComponentFixture<CardIssuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIssuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIssuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
