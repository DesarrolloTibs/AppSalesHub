import { Component } from '@angular/core';

@Component({
  selector: 'app-coordinator-add-page',
  templateUrl: './coordinator-add-page.component.html',
  styleUrls: ['./coordinator-add-page.component.scss']
})
export class CoordinatorAddPageComponent {
  public history: any = [
    {
      name: 'Coordinador',
      router:['/','level1']
    },
    {
      name: 'Nuevo',
      router:null
    }
  ]
}
