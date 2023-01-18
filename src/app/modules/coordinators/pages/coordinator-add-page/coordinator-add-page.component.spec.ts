import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorAddPageComponent } from './coordinator-add-page.component';

describe('CoordinatorAddPageComponent', () => {
  let component: CoordinatorAddPageComponent;
  let fixture: ComponentFixture<CoordinatorAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
