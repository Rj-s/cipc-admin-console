import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipcApplicationsComponent } from './cipc-applications.component';

describe('CipcApplicationsComponent', () => {
  let component: CipcApplicationsComponent;
  let fixture: ComponentFixture<CipcApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipcApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipcApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
