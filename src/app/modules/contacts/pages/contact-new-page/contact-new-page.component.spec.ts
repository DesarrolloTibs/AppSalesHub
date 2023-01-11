import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNewPageComponent } from './contact-new-page.component';

describe('ContactNewPageComponent', () => {
  let component: ContactNewPageComponent;
  let fixture: ComponentFixture<ContactNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactNewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
