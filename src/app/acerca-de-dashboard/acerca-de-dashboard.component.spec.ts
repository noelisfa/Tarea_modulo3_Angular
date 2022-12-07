import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeDashboardComponent } from './acerca-de-dashboard.component';

describe('AcercaDeDashboardComponent', () => {
  let component: AcercaDeDashboardComponent;
  let fixture: ComponentFixture<AcercaDeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
