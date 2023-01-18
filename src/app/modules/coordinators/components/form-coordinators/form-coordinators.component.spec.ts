import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoordinatorsComponent } from './form-coordinators.component';

describe('FormCoordinatorsComponent', () => {
  let component: FormCoordinatorsComponent;
  let fixture: ComponentFixture<FormCoordinatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCoordinatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCoordinatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
