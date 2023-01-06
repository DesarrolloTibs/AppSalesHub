import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule

  ]
})
export class ContactsModule { }
