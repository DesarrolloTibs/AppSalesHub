import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddPageComponent } from './pages/contact-add-page/contact-add-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    //contacts/
    path: '',
    redirectTo: 'list',
    pathMatch: "full",
  },
  {
    path: '',
    component: ContactPageComponent,

    children: [
      {
        path: 'list',
        component: ContactListPageComponent,
      },
      {
        path: 'editar/:id',
        component: ContactAddPageComponent,
      },
      {
        path: 'detail/:id',
        component: ContactDetailPageComponent,
      },
      {
        path: 'new',
        component: ContactAddPageComponent,
        pathMatch:'full'
      }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
