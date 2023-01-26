import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { ListEmailsComponent } from './pages/list-emails/list-emails.component';


@NgModule({
  declarations: [
    ListEmailsComponent
  ],
  imports: [
    CommonModule,
    EmailsRoutingModule
  ]
})
export class EmailsModule { }
