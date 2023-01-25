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
      { title: 'COORDINATORS.FULLNAME', action: false, reference: 'fullName',activePipe:true,namePipe:['titlecase'], activeSearch:true },
      { title: 'COORDINATORS.PHONES', action: false, reference: 'phones', activePipe:false, activeSearch:true},
      { title: 'COORDINATORS.EMAILS', action: false, reference: 'emails', activePipe:false, activeSearch:true },
      { title: 'COORDINATORS.ORGANIZATION', action: false, reference: 'organization',activePipe:true,namePipe:['titlecase'], activeSearch:true },
      { title: 'COORDINATORS.REGIONS', action: false, reference: 'regions',activePipe:false, activeSearch:true },
      { title: 'GENERAL.ESTATUS', action: false, reference: 'deleted',activePipe:true,namePipe:['status'], activeSearch:false },
      { title: 'GENERAL.UPDATE', action: true, reference: 'update' },
      { title: 'GENERAL.DELETERESTORE', action: true, reference: 'deleterestore' }
    ];
    this.routeTo = getCurrentRoute(this.router.url)
  }
}
