import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactNewPageComponent } from './pages/contact-new-page/contact-new-page.component';
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
        component: ContactEditPageComponent,
      },
      {
        path: 'detail/:id',
        component: ContactDetailPageComponent,
      },
      {
        path: 'new',
        component: ContactNewPageComponent,
      }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
