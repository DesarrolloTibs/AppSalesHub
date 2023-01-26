import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [{
  path:'',
  component:MainComponent,
  children:[{
    path:'whatsapp',
    loadChildren:()=>import("@modules/whatsapp/whatsapp.module").then(m => m.WhatsappModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
