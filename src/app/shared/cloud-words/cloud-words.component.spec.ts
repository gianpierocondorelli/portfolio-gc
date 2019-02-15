import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudWordsComponent } from './cloud-words.component';

describe('CloudWordsComponent', () => {
  let component: CloudWordsComponent;
  let fixture: ComponentFixture<CloudWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
