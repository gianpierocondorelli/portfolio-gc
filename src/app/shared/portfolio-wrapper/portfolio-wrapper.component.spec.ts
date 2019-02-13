import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWrapperComponent } from './portfolio-wrapper.component';

describe('PortfolioWrapperComponent', () => {
  let component: PortfolioWrapperComponent;
  let fixture: ComponentFixture<PortfolioWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
