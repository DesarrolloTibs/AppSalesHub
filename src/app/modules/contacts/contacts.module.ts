import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactNewPageComponent } from './pages/contact-new-page/contact-new-page.component';


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactEditPageComponent,
    ContactListPageComponent,
    ContactDetailPageComponent,
    ContactNewPageComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    SharedModule


  ]
})
export class ContactsModule { }
