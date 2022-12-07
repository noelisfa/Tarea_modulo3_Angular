import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciamodalComponent } from './experienciamodal.component';

describe('ExperienciamodalComponent', () => {
  let component: ExperienciamodalComponent;
  let fixture: ComponentFixture<ExperienciamodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciamodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
