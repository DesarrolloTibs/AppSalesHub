import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { TableColumns } from '@core/models/tableColumns.model';
import { MatSort, Sort } from '@angular/material/sort';
//import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';
import { RestService } from '@core/services/rest.service';
import { routeEnpoints } from 'src/app/global/endpoints';
import { PageEvent } from '@angular/material/paginator';
import { TableService } from '@core/models/tableService.model';
import { PaginationModel } from '@core/models/pagination.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent implements OnInit, AfterViewInit {
  @Input() displayedColumns: Array<TableColumns> = []
  @Input() serviceName: string = ''
  length = 20;
  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [10, 20, 50, 100];
  routeTo: string = ""
  public columnsToDisplay: string[] = [];
  public dataSource = new MatTableDataSource<any>();
  constructor(private _liveAnnouncer: LiveAnnouncer,
    private route: ActivatedRoute,
    private router: Router,
    private _restService: RestService,
    private dialog: MatDialog) {
  }
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {

    this.columnsToDisplay = this.displayedColumns.map(m => m.reference);
    this.routeTo = getCurrentRoute(this.router.url)
    const q = [
      `${this.serviceName}/get/`,
      `?page=1&limit=${this.pageSize}`,
      `&order=-1`,
    ];
    this.loadData(q.join(''));
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public redirectToDetails = (id: string) => {
    console.log(`redireccionando ${this.routeTo} DETALLE con el identificador:${id}`)
    this.router.navigate([`/${this.routeTo}/detail/${id}`]);
  }
  public redirectToUpdate = (id: string) => {
    this.router.navigate([`/${this.routeTo}/editar/${id}`]);
  }
  public redirectToDelete = (id: string) => {
    this.router.navigate([`/${this.routeTo}/delete/${id}`]);
  }
  public redirectToDeleteRestore = (id: string, toggle: boolean) => {
    console.log("Delete", id, toggle)
    this.openDialog('0ms', '0ms', id, this.serviceName, toggle)
  }
  public redirectToNew = () => {
    this.router.navigate([`/${this.routeTo}/new`]);
  }

  public doFilter = (event: KeyboardEvent) => {
    const search = (event.target as HTMLTextAreaElement).value;
    const fields = this.displayedColumns.map(z => z.activeSearch ? z.reference : '')
    const q = [
      `${this.serviceName}/get`,
      `?filter=${search.trim()}`,
      `&fields=${fields.filter(c => c != '').join(',')}`,
      //`&fields=fullName`,
      `&page=${this.pageIndex + 1}&limit=${this.pageSize}`,
      `&order=-1`,
    ];
    this.loadData(q.join(''));

  }
  public pageChanged = (e: PageEvent) => {
    this.pageSize = e.pageSize
    this.pageIndex = e.pageIndex
    const q = [
      `${this.serviceName}/get/`,
      `?page=${e.pageIndex + 1}&limit=${e.pageSize}`,
      `&order=-1`,
    ];
    //try {
    //this._restService.getActive$(q.join(''))
    this.loadData(q.join(''));
  }


  loadData(service: string): void {
    console.log(service)


    this._restService.getTable$(service)
      .subscribe((response: TableService) => {

        const { itemsList, pagination } = response;
        console.log(itemsList)
        this.pageSetValue(pagination)
        this.dataSource.data = itemsList as any


      })
  }
  public pageSetValue = (pagination: PaginationModel) => {

    const {
      totalDocs,
      limit,
      totalPages,
      page,
      pagingCounter,
      hasPrevPage,
      hasNextPage,
      prevPage,
      nextPage } = pagination
    this.length = totalDocs;
    this.pageSize = limit;

  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string, service: string, toggle: boolean): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: { id,toggle },
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        const url = `${service}/${toggle ? 'restore' : 'delete'}/${result}`
        toggle
          ?
          this.restoreItem(url, {})
          :
          this.deleteItem(url)
      }

    });

  }
  public deleteItem = (service: string) => {
    this._restService.delete$(service)
      .subscribe(() => {
        const q = [
          `${this.serviceName}/get/`,
          `?page=${this.pageIndex}&limit=${this.pageSize}`,
          `&order=-1`,
        ];


        //try {
        //this._restService.getActive$(q.join(''))
        this.loadData(q.join(''));
      })
  }
  public restoreItem = (service: string, id: any) => {
    this._restService.restore$(service, id)
      .subscribe(() => {
        const q = [
          `${this.serviceName}/get/`,
          `?page=${this.pageIndex}&limit=${this.pageSize}`,
          `&order=-1`,
        ];


        //try {
        //this._restService.getActive$(q.join(''))
        this.loadData(q.join(''));
      })
  }

}


