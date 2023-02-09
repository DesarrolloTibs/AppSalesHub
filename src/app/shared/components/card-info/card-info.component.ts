import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '@core/services/rest.service';
import { CardService } from '@core/models/cardService.model';
import { TypeCard } from '@core/enum/typeCard.enum';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ShareService } from '@core/services/share.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],

})
export class CardInfoComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;
  @Input() title: string = ''
  @Input() idContact: string = ''
  @Input() serviceName: string = ''
  @Input() typeCard: TypeCard = TypeCard.Note
  routeTo: string = ""
  @Input() componentDialog!: ComponentType<unknown>
  someSubscription: any;

  public infoToDisplay: Array<any> = [];
  public totalCount = 0;
  public pageIndex = 1;
  public pageSize = 10;
  public totalLoad = 0;
  //public idContact = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private _restService: RestService,
    private _shareService:ShareService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';

  }
  ngOnInit(): void {
    //let params=(collectRouteParams(this.router))
    //this.idContact= (params as ObjectValue).id
    this.loadData(this.serviceName, this.pageIndex, this.pageSize)
    this.pageIndex += 1;
  }


  public redirectToNew = () => {
    
    //this.router.navigate([`/${this.routeTo}/new`]);b
    this._shareService.openDialog('0ms', '0ms', '', this.serviceName, true,this.idContact,this.componentDialog)
  }
  // public redirectToEdit = (id: string) => {
    
  //   //this.router.navigate([`/${this.routeTo}/new`]);b
  //   this.openDialog('0ms', '0ms', id, this.serviceName, true,this.idContact)
  // }


  loadData(serviceName: string, pageIndex: number, pageSize: number): void {
    const q = [
      `${serviceName}/get/`,
      `?page=${pageIndex}&limit=${pageSize}`,
      `&order=-1&sort=updatedAt`,
     // `&fields=_id,description,creator,creatorName,contact,deleted,createdAt,updatedAt,tenantId`,
     `&fields=contact`, 
     `&filter=${this.idContact}`,
    // 
    ];
    if (this.typeCard === TypeCard.Note) {
    this._restService.getTable$(q.join(''))
      .subscribe((response: CardService) => {
        const { itemsList, pagination } = response;
        
        
        this.totalCount = pagination.totalDocs
        //this.totalLoad=(pagination.page*this.pageSize)
      
          this.infoToDisplay = [...this.infoToDisplay, ...itemsList]
          //Object.assign(this.infoToDisplay, itemsList);
          this.totalLoad = (this.infoToDisplay.length)
          
       



        //this.pageSetValue(pagination)
        //this.dataSource.data = itemsList as any
      })
    } else {
      this.infoToDisplay = [{
        _id: "63d8453ec00f90ca6d139e03",
        description: "<p>test Emails</p>",
        from: 'hector.esparza@tibs.com.mx',
        to: 'hfemlsca@gmail.com',
        creator: "63cef93793dfd56487577aec",
        creatorName: "Hector Esparza",
        contact: "63d1c5b5d9131813199caaa8",
        deleted: false,
        createdAt: "2023-01-30T22:31:26.305Z",
        updatedAt: "2023-01-30T22:31:26.305Z",
        tenantId: "tibs"
      }]
    }
  }

  public async onScrollLoadData() {
    if (this.infoToDisplay.length !== this.totalCount) {

      const nativeElement = this.viewport.elementRef.nativeElement
      if (nativeElement.clientHeight + Math.round(nativeElement.scrollTop) >= (nativeElement.scrollHeight-50)) {
        if (this.totalLoad < this.totalCount) {
          this.loadData(this.serviceName, this.pageIndex, this.pageSize)
          this.pageIndex += 1
        }


      }
      // else{
      //   this.pageIndex =1;
      // }

    }
  }
  public async onloadMore() {
    if (this.infoToDisplay.length !== this.totalCount) {


      if (this.totalLoad < this.totalCount) {
        this.loadData(this.serviceName, this.pageIndex, this.pageSize)
        this.pageIndex += 1
      }



      // else{
      //   this.pageIndex =1;
      // }

    }
  }
}
