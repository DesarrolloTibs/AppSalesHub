import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,

  ]
})
export class ContactsModule { }
