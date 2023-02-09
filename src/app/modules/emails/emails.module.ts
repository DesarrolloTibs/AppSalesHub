import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { ListEmailsComponent } from './pages/list-emails/list-emails.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { QuillModule } from 'ngx-quill';
import { DialogFormEmailComponent } from './components/dialog-form-email/dialog-form-email.component';


@NgModule({
  declarations: [
    ListEmailsComponent,
    DialogFormEmailComponent
  ],
  imports: [
    CommonModule,
    EmailsRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
    QuillModule
  ]
})
export class EmailsModule { }
