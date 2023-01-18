import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinatorAddPageComponent } from './pages/coordinator-add-page/coordinator-add-page.component';
import { CoordinatorListPageComponent } from './pages/coordinator-list-page/coordinator-list-page.component';

const routes: Routes = [
  {
    //level3/
    path: '',
    redirectTo: 'list',
    pathMatch: "full",
  },
  {
    path: '',
    component: CoordinatorListPageComponent,
      
  },
  {
    path: 'list',
    component: CoordinatorListPageComponent,
  },
  {
    path: 'editar/:id',
    component: CoordinatorAddPageComponent,
  },
  
  {
    path: 'new',
    component: CoordinatorAddPageComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorsRoutingModule { }
