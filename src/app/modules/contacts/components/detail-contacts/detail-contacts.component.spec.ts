import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContactsComponent } from './detail-contacts.component';

describe('DetailContactsComponent', () => {
  let component: DetailContactsComponent;
  let fixture: ComponentFixture<DetailContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
