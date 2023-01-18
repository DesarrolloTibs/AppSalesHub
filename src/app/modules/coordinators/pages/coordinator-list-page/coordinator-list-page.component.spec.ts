import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorListPageComponent } from './coordinator-list-page.component';

describe('CoordinatorListPageComponent', () => {
  let component: CoordinatorListPageComponent;
  let fixture: ComponentFixture<CoordinatorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
