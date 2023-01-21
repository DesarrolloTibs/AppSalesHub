import { Component, OnInit } from '@angular/core';
import { TableColumns } from '@core/models/tableColumns.model';
import { ActivatedRoute, Router} from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';
import { TranslateService } from '@ngx-translate/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import { routeEnpoints } from 'src/app/global/endpoints';
@Component({
  selector: 'app-coordinator-list-page',
  templateUrl: './coordinator-list-page.component.html',
  styleUrls: ['./coordinator-list-page.component.scss'],
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
export class CoordinatorListPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private _translate:TranslateService) {}

  
  public service:string=routeEnpoints.coordinators;
  routeTo:string=""
  public displayedColumns: Array<TableColumns> = [];

  public history: any = [
    {
      name: 'Coordinador',
      router:null
    }
  ]

  ngOnInit(): void {
  
    //const f=this.getTranslate('CONTACTS.FULLNAME')
    this.displayedColumns = [
      { title: 'COORDINATORS.FULLNAME', action: false, reference: 'fullName' },
      { title: 'COORDINATORS.PHONES', action: false, reference: 'phones' },
      { title: 'COORDINATORS.EMAILS', action: false, reference: 'emails' },
      { title: 'COORDINATORS.ORGANIZATION', action: false, reference: 'organization' },
      { title: 'COORDINATORS.REGIONS', action: false, reference: 'regions' },
      { title: 'COORDINATORS.ZONES', action: false, reference: 'zones' },
      { title: 'GENERAL.DETAIL', action: true, reference: 'detail' },
      { title: 'GENERAL.UPDATE', action: true, reference: 'update' }
    ];
    this.routeTo = getCurrentRoute(this.router.url)
  }
}
