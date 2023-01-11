import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
    {
      path:'',
      children:[{
        path:"contacts",//
        loadChildren: () => import("@modules/contacts/contacts.module").then(m=>m.ContactsModule),
      },
       {
        path:"main",//
        loadChildren: () => import("@modules/main/main.module").then(m=>m.MainModule)
      },
      {
        path: '**',//TODO 404 cuando no existe la ruta
        redirectTo: '/main'
      }]
    }
  /*{
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/main'
  }*/
];

/**
 *  {
    path:"contacts",//
    loadChildren: () => import("@modules/contacts/contacts.module").then(m=>m.ContactsModule),
  },
   {
    path:"main",//
    loadChildren: () => import("@modules/main/main.module").then(m=>m.MainModule)
  },
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
