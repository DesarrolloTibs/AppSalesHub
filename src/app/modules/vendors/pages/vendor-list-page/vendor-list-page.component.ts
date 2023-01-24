import {  Component,  OnInit } from '@angular/core';
import { TableColumns } from '@core/models/tableColumns.model';

import { ActivatedRoute, Router} from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';
import { TranslateService } from '@ngx-translate/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import { routeEnpoints } from 'src/app/global/endpoints';

@Component({
  selector: 'app-vendor-list-page',
  templateUrl: './vendor-list-page.component.html',
  styleUrls: ['./vendor-list-page.component.scss'],
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
export class VendorListPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private _translate:TranslateService) {}

  routeTo:string=""
  public displayedColumns: Array<TableColumns> = [];
  public service:string=routeEnpoints.vendors;
  public history: any = [
    {
      name: 'Vendedores',
      router:null
    }
  ]
  ngOnInit(): void {
  
    //const f=this.getTranslate('CONTACTS.FULLNAME')
    this.displayedColumns = [
      { title: 'VENDORS.ADDRESS', action: false, reference: 'address' },
      { title: 'VENDORS.EMAILS', action: false, reference: 'emails' },
      { title: 'VENDORS.FULLNAME', action: false, reference: 'fullName' },
      { title: 'VENDORS.MANAGER', action: false, reference: 'manager' },
      { title: 'VENDORS.ORGANIZATION', action: false, reference: 'organization' },
      { title: 'VENDORS.PHONES', action: false, reference: 'phones' },
      { title: 'VENDORS.RFC', action: false, reference: 'rfc' },
      { title: 'VENDORS.ZONES', action: false, reference: 'zones' },
      { title: 'GENERAL.UPDATE', action: true, reference: 'update' }
    ];
    this.routeTo = getCurrentRoute(this.router.url)
  }
  

}
