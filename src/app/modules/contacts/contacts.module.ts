import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    SharedModule


  ]
})
export class ContactsModule { }
