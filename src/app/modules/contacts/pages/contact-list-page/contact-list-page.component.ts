import {  Component,  OnInit } from '@angular/core';
import { TableColumns } from '@core/models/tableColumns.model';

import { ActivatedRoute, Router} from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';
import { TranslateService } from '@ngx-translate/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import { routeEnpoints } from 'src/app/global/endpoints';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0}),
          stagger(30, [
            animate(100, style({opacity: 1}))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class ContactListPageComponent implements OnInit {
  /**
   *Set route component  //Todo:https:localhost:420/contacts/*
   */

  constructor(private route: ActivatedRoute, private router: Router, private _translate:TranslateService) {}

  routeTo:string=""
  public displayedColumns: Array<TableColumns> = [];
  public service:string=routeEnpoints.contacts;
  public history: any = [
    {
      name: 'Contactos',
      router:null
    }
  ]

  ngOnInit(): void {
  
    //const f=this.getTranslate('CONTACTS.FULLNAME')
    this.displayedColumns = [
      { title: 'CONTACTS.FULLNAME', action: false, reference: 'fullName' },
      { title: 'CONTACTS.OFFICEPHONE', action: false, reference: 'officePhone' },
      { title: 'CONTACTS.MOBILESPHONE', action: false, reference: 'mobilesPhone' },
      { title: 'CONTACTS.EMAILS', action: false, reference: 'emails' },
      { title: 'CONTACTS.CHANNEL', action: false, reference: 'channel' },
      { title: 'CONTACTS.TYPECONTACTS', action: false, reference: 'typeContacts' },
      { title: 'CONTACTS.COUNTRY', action: false, reference: 'country' },
      { title: 'CONTACTS.STATE', action: false, reference: 'state' },
      { title: 'CONTACTS.CITY', action: false, reference: 'city' },
      { title: 'CONTACTS.TOTALBUSINESS', action: false, reference: 'totalBusiness' },
      { title: 'CONTACTS.ORGANIZATION', action: false, reference: 'organization' },
      { title: 'CONTACTS.LEVEL1', action: false, reference: 'level1' },
      { title: 'CONTACTS.LEVEL2', action: false, reference: 'level2' },
      { title: 'CONTACTS.LEVEL3', action: false, reference: 'level3' },
      { title: 'GENERAL.DETAIL', action: true, reference: 'detail' },
      { title: 'GENERAL.UPDATE', action: true, reference: 'update' }
    ];
    this.routeTo = getCurrentRoute(this.router.url)
  }
  

 


}

