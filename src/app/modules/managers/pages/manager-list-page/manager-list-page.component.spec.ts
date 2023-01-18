import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListPageComponent } from './manager-list-page.component';

describe('ManagerListPageComponent', () => {
  let component: ManagerListPageComponent;
  let fixture: ComponentFixture<ManagerListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
