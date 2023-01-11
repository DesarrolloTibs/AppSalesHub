import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersPageComponent } from './pages/managers-page/managers-page.component';


@NgModule({
  declarations: [
    ManagersPageComponent,
  ],
  imports: [
    CommonModule,
    ManagersRoutingModule
  ]
})
export class ManagersModule { }
