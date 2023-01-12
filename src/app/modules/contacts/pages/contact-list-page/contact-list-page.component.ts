import {  Component,  OnInit } from '@angular/core';
import { TableColumns } from '@core/models/tableColumns.model';

import { ActivatedRoute, Router} from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit {
  /**
   *Set route component  //Todo:https:localhost:420/contacts/*
   */

  constructor(private route: ActivatedRoute, private router: Router) {}

  routeTo:string=""
  public displayedColumns: Array<TableColumns> = [
    { title: 'Nombre Completo', action: false, reference: 'fullName' },
    { title: 'Telefono Oficina', action: false, reference: 'officePhone' },
    { title: 'Telefono Movil', action: false, reference: 'mobilesPhone' },
    { title: 'Correos', action: false, reference: 'emails' },
    { title: 'Canal', action: false, reference: 'channel' },
    { title: 'Tipo', action: false, reference: 'typeContacts' },
    { title: 'País', action: false, reference: 'country' },
    { title: 'Estado', action: false, reference: 'state' },
    { title: 'Ciudad', action: false, reference: 'city' },
    { title: 'Total Negocio', action: false, reference: 'totalBusiness' },
    { title: 'ver', action: true, reference: 'detail' },
    { title: 'Actualizar', action: true, reference: 'update' }
  ];

  ngOnInit(): void {
    this.routeTo = getCurrentRoute(this.router.url)
  }
  handleClick = () => {
    
    this.router.navigate([`/${this.routeTo}/new`]);
  }
}

