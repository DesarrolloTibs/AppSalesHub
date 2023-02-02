import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddPageComponent } from './pages/contact-add-page/contact-add-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';

const routes: Routes = [
  {
    //contacts/
    path: '',
    redirectTo: 'list',
    pathMatch: "full",
  },
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
    children: [
      {
        path: "",//
        redirectTo: 'notes',
         pathMatch: "full",
         //loadChildren: () => import("@modules/notes/notes.module").then(m => m.NotesModule),
        //component: ListNoteComponent
      },
      {
        path: "notes",//
         loadChildren: () => import("@modules/notes/notes.module").then(m => m.NotesModule),
        //component: ListNoteComponent
      },
      {
        path: "email",//
        // loadChildren: () => import("@modules/notes/notes.module").then(m => m.NotesModule),
        loadChildren: () => import("@modules/emails/emails.module").then(m => m.EmailsModule),
      },
      {
        path: "activities",//
        // loadChildren: () => import("@modules/notes/notes.module").then(m => m.NotesModule),
        loadChildren: () => import("@modules/activities/activities.module").then(m => m.ActivitiesModule),
      },
      {
        path: "social",//
        // loadChildren: () => import("@modules/notes/notes.module").then(m => m.NotesModule),
        loadChildren: () => import("@modules/social/social.module").then(m => m.SocialModule),
      }
      
    ]
  },

  {
    path: 'new',
    component: ContactAddPageComponent,
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
