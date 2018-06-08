import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualreturnApplicationsComponent } from './annualreturn-applications.component';

describe('AnnualreturnApplicationsComponent', () => {
  let component: AnnualreturnApplicationsComponent;
  let fixture: ComponentFixture<AnnualreturnApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualreturnApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualreturnApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
