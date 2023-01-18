import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerAddPageComponent } from './pages/manager-add-page/manager-add-page.component';
import { ManagerListPageComponent } from './pages/manager-list-page/manager-list-page.component';

const routes: Routes = [ {
  //level2/
  path: '',
  redirectTo: 'list',
  pathMatch: "full",
},
{
  path: '',
  component: ManagerListPageComponent,
    
},
{
  path: 'list',
  component: ManagerListPageComponent,
},
{
  path: 'editar/:id',
  component: ManagerAddPageComponent,
},

{
  path: 'new',
  component: ManagerAddPageComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersRoutingModule { }
