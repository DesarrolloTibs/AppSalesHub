import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinatorsRoutingModule } from './coordinators-routing.module';
import { FormCoordinatorsComponent } from './components/form-coordinators/form-coordinators.component';
import { CoordinatorListPageComponent } from './pages/coordinator-list-page/coordinator-list-page.component';
import { CoordinatorAddPageComponent } from './pages/coordinator-add-page/coordinator-add-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@shared/material.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    FormCoordinatorsComponent,
    CoordinatorListPageComponent,
    CoordinatorAddPageComponent,

  ],
  imports: [
    CommonModule,
    CoordinatorsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule
  ]
})
export class CoordinatorsModule { }
