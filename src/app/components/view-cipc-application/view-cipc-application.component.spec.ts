import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCipcApplicationComponent } from './view-cipc-application.component';

describe('ViewCipcApplicationComponent', () => {
  let component: ViewCipcApplicationComponent;
  let fixture: ComponentFixture<ViewCipcApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCipcApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCipcApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
