import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionmodalComponent } from './educacionmodal.component';

describe('EducacionmodalComponent', () => {
  let component: EducacionmodalComponent;
  let fixture: ComponentFixture<EducacionmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
