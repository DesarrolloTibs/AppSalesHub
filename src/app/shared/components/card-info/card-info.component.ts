import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit ,ViewChild , ElementRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '@core/services/rest.service';
import { CardService } from '@core/models/cardService.model';
import { TypeCard } from '@core/enum/typeCard.enum';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;
  @Input() title: string = ''
  @Input() serviceName: string = ''
  @Input() typeCard: TypeCard =TypeCard.Note
  routeTo: string = ""
  @Input() componentDialog!:ComponentType<unknown>
  public infoToDisplay: Array<any> = [];
  public totalCount=0;
  public pageIndex=1;
  public pageSize=10;
  public totalLoad=0;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private _restService:RestService) {
  }
  ngOnInit(): void {
    //this.routeTo = getCurrentRoute(this.router.url)
    const q = [
      `${this.serviceName}/get/`,
      `?page=${this.pageIndex}&limit=${this.pageSize}`,
      `&order=-1`,
    ];
    this.loadData(q.join(''))
    this.pageIndex +=1;
  }


  public redirectToNew = () => {
    console.log(`/${this.serviceName}/new`)
    //this.router.navigate([`/${this.routeTo}/new`]);b
    this.openDialog('0ms', '0ms', 'sdsdfsdf', this.serviceName, true)
  }
  public redirectToEdit = (id:string) => {
    console.log(`/${this.serviceName}/update`)
    //this.router.navigate([`/${this.routeTo}/new`]);b
    this.openDialog('0ms', '0ms', 'sdsdfsdf', this.serviceName, true)
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string, service: string, toggle: boolean): void {
    const dialogRef = this.dialog.open(this.componentDialog, {
      data: { id,toggle },
      width: '850px',
      height:'600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        //const url = `${service}/${toggle ? 'restore' : 'delete'}/${result}`
        //toggle
          //?
          //this.restoreItem(url, {})
          //:
          //this.deleteItem(url)
      }

    });

  }

  loadData(service: string): void {
    console.log(service)
    this._restService.getTable$(service)
      .subscribe((response:CardService) => {
        const { itemsList,pagination} = response;
        console.log("respuesta modelo",itemsList)
        console.log("Tipo Card",pagination)
        this.totalCount=pagination.totalDocs
        //this.totalLoad=(pagination.page*this.pageSize)
        if(this.typeCard===TypeCard.Note){
          this.infoToDisplay=[...this.infoToDisplay,...itemsList]
          //Object.assign(this.infoToDisplay, itemsList);
          this.totalLoad=(this.infoToDisplay.length)
          console.log('PUSH',this.infoToDisplay)
        }else{
          this.infoToDisplay=[{_id:"63d8453ec00f90ca6d139e03",
          description:"<p>test Emails</p>",
          from:'hector.esparza@tibs.com.mx',
          to:'hfemlsca@gmail.com',
          creator:"63cef93793dfd56487577aec",
          creatorName:"Hector Esparza",
          contact:"63d1c5b5d9131813199caaa8",
          deleted:false,
          createdAt:"2023-01-30T22:31:26.305Z",
          updatedAt:"2023-01-30T22:31:26.305Z",
          tenantId:"tibs"}]
        }
   
       
       
        //this.pageSetValue(pagination)
       //this.dataSource.data = itemsList as any
      })
  }
  public async onScrollLoadData(){
    if( this.infoToDisplay.length !== this.totalCount){
      const q = [
        `${this.serviceName}/get/`,
        `?page=${this.pageIndex}&limit=${this.pageSize}`,
        `&order=-1`,
      ]; 
      const nativeElement= this.viewport.elementRef.nativeElement
      if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight){
        if(this.totalLoad< this.totalCount){
          this.loadData(q.join(''))
          this.pageIndex+=1
        }
       
     
      }
      // else{
      //   this.pageIndex =1;
      // }
   
    }
}
public async onloadMore(){
  if( this.infoToDisplay.length !== this.totalCount){
    const q = [
      `${this.serviceName}/get/`,
      `?page=${this.pageIndex}&limit=${this.pageSize}`,
      `&order=-1`,
    ]; 

      if(this.totalLoad< this.totalCount){
        this.loadData(q.join(''))
        this.pageIndex+=1
      }
     
   
    
    // else{
    //   this.pageIndex =1;
    // }
 
  }
}
}
