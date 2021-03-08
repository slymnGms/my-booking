import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelphotoComponent } from './hotelphoto.component';

describe('HotelphotoComponent', () => {
  let component: HotelphotoComponent;
  let fixture: ComponentFixture<HotelphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
