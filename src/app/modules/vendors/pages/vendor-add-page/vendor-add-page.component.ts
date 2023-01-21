import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-add-page',
  templateUrl: './vendor-add-page.component.html',
  styleUrls: ['./vendor-add-page.component.scss']
})
export class VendorAddPageComponent {
  public history: any = [
    {
      name: 'Vendedor',
      router:['/','level3']
    },
    {
      name: 'Nuevo',
      router:null
    }
  ]
}
