import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [//Todo: Change Routes in Sidebar, Routing module each path 
      {
        path: "contacts",
        loadChildren: () => import("@modules/contacts/contacts.module").then(m => m.ContactsModule),
      },
      {
        path: "level1",//
        loadChildren: () => import("@modules/vendors/vendors.module").then(m => m.VendorsModule),
   
      },
      {
        path: "level2",//
        loadChildren: () => import("@modules/managers/managers.module").then(m => m.ManagersModule),

      },
      {
        path: "level3",//
        loadChildren: () => import("@modules/coordinators/coordinators.module").then(m => m.CoordinatorsModule),

      },
      {
        path: "organizations",//
        loadChildren: () => import("@modules/organizations/organizations.module").then(m => m.OrganizationsModule),

      },
      {
        path: "main",//
        loadChildren: () => import("@modules/main/main.module").then(m => m.MainModule),
      
      },
      {
        path: '**',//TODO 404 cuando no existe la ruta
        redirectTo: '/main'
      }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
