import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreHttpRequestsComponentComponent } from './more-http-requests-component.component';

describe('MoreHttpRequestsComponentComponent', () => {
  let component: MoreHttpRequestsComponentComponent;
  let fixture: ComponentFixture<MoreHttpRequestsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreHttpRequestsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreHttpRequestsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
