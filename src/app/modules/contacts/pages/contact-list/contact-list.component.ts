import { Component, OnInit} from '@angular/core';
import { TableColumns } from '@core/models/tableColumns.model';
import * as dataRaw from "src/app/data/contacts.json"
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit  {
  public displayedColumns: Array<TableColumns> = [
    {title:'Nombre Completo',action:false,reference:'fullName'},
    {title:'Telefono Oficina',action:false,reference:'officePhone'},
    {title:'Telefono Movil',action:false,reference:'mobilesPhone'},
    {title:'Correos',action:false,reference:'emails'},
    {title:'Canal',action:false,reference:'channel'},
    {title:'Tipo',action:false,reference:'typeContacts'},
    {title:'País',action:false,reference:'country'},
    {title:'Estado',action:false,reference:'state'},
    {title:'Ciudad',action:false,reference:'city'},
    {title:'Total Negocio',action:false,reference:'totalBusiness'},
   
    {title:'Actualizar',action:true,reference:'update'}
 
    /*'officePhone',
    'mobilesPhone', 
    'emails', 
    'channel', 
    'typeContacts', 
    'country', 
    'state', 
    'city', 
    'totalBusiness',
    'details',
    'update',
    'delete'*/
  ];
  public dataSource = []
  ngOnInit() {
    this.getAllOwners();
  }
  public getAllOwners = () => {
    const { data }: any = (dataRaw as any).default
    const { itemsList } = data;

    this.dataSource = itemsList


  }
}
