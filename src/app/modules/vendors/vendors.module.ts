import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsRoutingModule } from './vendors-routing.module';
import { FormVendorComponent } from './components/form-vendor/form-vendor.component';
import { VendorListPageComponent } from './pages/vendor-list-page/vendor-list-page.component';
import { VendorAddPageComponent } from './pages/vendor-add-page/vendor-add-page.component';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FormVendorComponent,
    VendorListPageComponent,
    VendorAddPageComponent
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class VendorsModule { }
