import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonProgressComponent } from './button-progress.component';

describe('ButtonProgressComponent', () => {
  let component: ButtonProgressComponent;
  let fixture: ComponentFixture<ButtonProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
