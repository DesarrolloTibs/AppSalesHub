import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '@core/services/rest.service';
import { getCurrentRoute } from 'src/app/utils/utils';
@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input() title: string = ''
  @Input() serviceName: string = ''
  routeTo: string = ""
  @Input() componentDialog!:ComponentType<unknown>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private _restService:RestService) {
  }
  ngOnInit(): void {
    //this.routeTo = getCurrentRoute(this.router.url)
  }


  public redirectToNew = () => {
    console.log(`/${this.serviceName}/new`)
    //this.router.navigate([`/${this.routeTo}/new`]);b
    this.openDialog('0ms', '0ms', 'sdsdfsdf', this.serviceName, true)
  }
  public redirectToEdit = () => {
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


    // this._restService.getTable$(service)
    //   .subscribe((response: TableService) => {

    //     const { itemsList, pagination } = response;
    //     console.log(itemsList)
    //     this.pageSetValue(pagination)
    //     this.dataSource.data = itemsList as any


    //   })
  }
}
