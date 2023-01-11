import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableColumns } from '@core/models/tableColumns.model';
import { ActivatedRoute, Router } from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';
import { ContactsModel } from '@core/models/contacts.model';
import { ContactService } from '@modules/contacts/services/contact.service';
import { Subscription,lastValueFrom } from 'rxjs';
import * as dataRaw from 'src/app/data/contacts.json' 
@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit, OnDestroy {
  /**
   *Set route component  //Todo:https:localhost:420/contacts/*
   */
  private setRoute: string = ""

  contactsList: Array<any> = [];

  listObservers$: Array<Subscription> = []

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
  constructor(private route: ActivatedRoute,
    private router: Router,
    private _contactService: ContactService
  ) { }
  ngOnInit() {
   // const { data }: any = (dataRaw as any).default
    //const { itemsList } = data;
  // this.getAllContacts()
this._contactService.getAllContacts$().subscribe(response=>{
  console.log("Padre",response)
  this.contactsList=response
})
  

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

  async getAllContacts():Promise<any>{
  
    const data =   this._contactService.getAllContacts$();
   return await lastValueFrom(data)

  }

   handleClick = () => {
    this.setRoute = getCurrentRoute(this.router.url)
    this.router.navigate([`/${this.setRoute}/new`]);
  }
}

