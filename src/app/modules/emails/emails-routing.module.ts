import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmailsComponent } from './pages/list-emails/list-emails.component';

const routes: Routes = [{
  path:'',
  component:ListEmailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
