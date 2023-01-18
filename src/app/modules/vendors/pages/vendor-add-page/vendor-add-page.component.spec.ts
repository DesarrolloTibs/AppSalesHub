import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAddPageComponent } from './vendor-add-page.component';

describe('VendorAddPageComponent', () => {
  let component: VendorAddPageComponent;
  let fixture: ComponentFixture<VendorAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
