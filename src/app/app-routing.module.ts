import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'home',//TODO: http://localhost:4200/
  loadChildren:()=> import(`../app/modules/home/home.module`).then(m=>m.HomeModule)
},{
  path:'contacts',//TODO: http://localhost:4200/
  loadChildren:()=> import(`../app/modules/contacts/contacts.module`).then(m=>m.ContactsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
