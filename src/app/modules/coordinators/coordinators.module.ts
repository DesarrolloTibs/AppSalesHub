import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorsRoutingModule } from './coordinators-routing.module';
import { CoordinatorsPageComponent } from './pages/coordinators-page/coordinators-page.component';


@NgModule({
  declarations: [
    CoordinatorsPageComponent
  ],
  imports: [
    CommonModule,
    CoordinatorsRoutingModule
  ]
})
export class CoordinatorsModule { }
