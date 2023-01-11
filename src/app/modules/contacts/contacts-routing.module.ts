import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
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
    children: [{
      path: 'editar/:id',
      component: ContactEditPageComponent,
    },
    {
      path: 'list',
      component: ContactListComponent,
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
