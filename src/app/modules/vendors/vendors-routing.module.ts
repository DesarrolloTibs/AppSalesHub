import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorAddPageComponent } from './pages/vendor-add-page/vendor-add-page.component';
import { VendorListPageComponent } from './pages/vendor-list-page/vendor-list-page.component';

const routes: Routes = [{
  //level1/
  path: '',
  redirectTo: 'list',
  pathMatch: "full",
},
{
  path: '',
  component: VendorListPageComponent,
    
},
{
  path: 'list',
  component: VendorListPageComponent,
},
{
  path: 'editar/:id',
  component: VendorAddPageComponent,
},

{
  path: 'new',
  component: VendorAddPageComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
