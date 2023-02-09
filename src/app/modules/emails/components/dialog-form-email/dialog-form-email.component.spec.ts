import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormEmailComponent } from './dialog-form-email.component';

describe('DialogFormEmailComponent', () => {
  let component: DialogFormEmailComponent;
  let fixture: ComponentFixture<DialogFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
