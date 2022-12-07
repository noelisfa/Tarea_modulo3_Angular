import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosmodalComponent } from './proyectosmodal.component';

describe('ProyectosmodalComponent', () => {
  let component: ProyectosmodalComponent;
  let fixture: ComponentFixture<ProyectosmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
