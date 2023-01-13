import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { TableGridComponent } from './components/table-grid/table-grid.component';
import { SideBarNavigationComponent } from './components/side-bar-navigation/side-bar-navigation.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SideBarComponent,
    TableGridComponent,
       SideBarNavigationComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
   RouterModule,
   TranslateModule
  
  ],
  exports:[
    SideBarComponent,
    TableGridComponent
  ],
  bootstrap:[SideBarComponent]
})
export class SharedModule { }
