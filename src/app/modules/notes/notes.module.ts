import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ListNoteComponent } from './pages/list-note/list-note.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { DialogFormNoteComponent } from './components/dialog-form-note/dialog-form-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    ListNoteComponent,
    DialogFormNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
    QuillModule
  ]
})
export class NotesModule { }
