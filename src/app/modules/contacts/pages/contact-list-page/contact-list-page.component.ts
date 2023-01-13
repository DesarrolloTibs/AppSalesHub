import {  Component,  OnInit } from '@angular/core';
import { TableColumns } from '@core/models/tableColumns.model';

import { ActivatedRoute, Router} from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit {
  /**
   *Set route component  //Todo:https:localhost:420/contacts/*
   */

  constructor(private route: ActivatedRoute, private router: Router, private _translate:TranslateService) {}

  routeTo:string=""
  public displayedColumns: Array<TableColumns> = [];


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
      { title: 'GENERAL.DETAIL', action: true, reference: 'detail' },
      { title: 'GENERAL.UPDATE', action: true, reference: 'update' }
    ];
    this.routeTo = getCurrentRoute(this.router.url)
  }
  handleClick = () => {
    
    this.router.navigate([`/${this.routeTo}/new`]);
  }

 


}

