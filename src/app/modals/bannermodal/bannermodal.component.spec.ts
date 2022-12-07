import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannermodalComponent } from './bannermodal.component';

describe('BannermodalComponent', () => {
  let component: BannermodalComponent;
  let fixture: ComponentFixture<BannermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannermodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
