import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddPageComponent } from './manager-add-page.component';

describe('ManagerAddPageComponent', () => {
  let component: ManagerAddPageComponent;
  let fixture: ComponentFixture<ManagerAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
