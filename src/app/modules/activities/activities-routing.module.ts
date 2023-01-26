import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActivityComponent } from './pages/list-activity/list-activity.component';

const routes: Routes = [{
  path:'',
  component:ListActivityComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
