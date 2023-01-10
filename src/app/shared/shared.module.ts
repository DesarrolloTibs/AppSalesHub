import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { TableGridComponent } from './components/table-grid/table-grid.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    TableGridComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
   RouterModule
  
  ],
  exports:[
    SideBarComponent,
    HeaderUserComponent,
    TableGridComponent
  ],
  bootstrap:[SideBarComponent]
})
export class SharedModule { }
