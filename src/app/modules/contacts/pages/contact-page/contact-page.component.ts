import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsModel } from '@core/models/contacts.model';
import * as dataRaw from "src/app/data/contacts.json"
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  public displayedColumns: Array<string> = [
    'fullName',
    'officePhone',
    /*'mobilesPhone', 
    'emails', 
    'channel', 
    'typeContacts', 
    'country', 
    'state', 
    'city', 
    'totalBusiness',*/
    'details',
    'update',
    'delete'
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
