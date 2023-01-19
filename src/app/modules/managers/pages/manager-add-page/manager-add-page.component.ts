import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-add-page',
  templateUrl: './manager-add-page.component.html',
  styleUrls: ['./manager-add-page.component.scss']
})
export class ManagerAddPageComponent {
  public history: any = [
    {
      name: 'Gerente',
      router:['/','level2']
    },
    {
      name: 'Nuevo',
      router:null
    }
  ]
}
