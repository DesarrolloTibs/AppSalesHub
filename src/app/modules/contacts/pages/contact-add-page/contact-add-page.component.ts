import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-add-page',
  templateUrl: './contact-add-page.component.html',
  styleUrls: ['./contact-add-page.component.scss']
})
export class ContactAddPageComponent implements OnInit {
  public history: any = [
    {
      name: 'Contactos',
      router:['/','contacts']
    },
    {
      name: 'Nuevo',
      router:null
    }
  ]


  ngOnInit(): void {

  }
}
