import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsModel } from '@core/models/contacts.model';
import { TableColumns } from '@core/models/TableColumns.model';
import * as dataRaw from "src/app/data/contacts.json"
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
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
    {title:'Detalle',action:true,reference:'detail'},
    {title:'Actualizar',action:true,reference:'update'},
    {title:'Borrar',action:true,reference:'delete'},
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
