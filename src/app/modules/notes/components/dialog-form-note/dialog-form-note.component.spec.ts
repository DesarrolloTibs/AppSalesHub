import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormNoteComponent } from './dialog-form-note.component';

describe('DialogFormNoteComponent', () => {
  let component: DialogFormNoteComponent;
  let fixture: ComponentFixture<DialogFormNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
