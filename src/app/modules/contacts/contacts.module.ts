import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactEditPageComponent,
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    SharedModule


  ]
})
export class ContactsModule { }
