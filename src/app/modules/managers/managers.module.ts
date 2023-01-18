import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';

import { FormManagerComponent } from './components/form-manager/form-manager.component';
import { ManagerAddPageComponent } from './pages/manager-add-page/manager-add-page.component';
import { ManagerListPageComponent } from './pages/manager-list-page/manager-list-page.component';


@NgModule({
  declarations: [
    FormManagerComponent,
    ManagerAddPageComponent,
    ManagerListPageComponent,
  ],
  imports: [
    CommonModule,
    ManagersRoutingModule
  ]
})
export class ManagersModule { }
