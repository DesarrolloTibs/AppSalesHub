import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
   RouterModule
  
  ],
  exports:[
    SideBarComponent,
    HeaderUserComponent,
  ],
  bootstrap:[SideBarComponent]
})
export class SharedModule { }
