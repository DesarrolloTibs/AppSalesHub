import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';

import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';

import { FormContactsComponent } from './components/form-contacts/form-contacts.component';
import { ContactAddPageComponent } from './pages/contact-add-page/contact-add-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ContactListPageComponent,
    ContactDetailPageComponent,
    ContactAddPageComponent,
    FormContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
   


  ]
})
export class ContactsModule { }
