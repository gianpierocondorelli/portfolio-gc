import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCookieInfoComponent } from './fixed-cookie-info.component';

describe('FixedCookieInfoComponent', () => {
  let component: FixedCookieInfoComponent;
  let fixture: ComponentFixture<FixedCookieInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedCookieInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedCookieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
