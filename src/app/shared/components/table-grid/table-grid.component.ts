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
import {PageEvent} from '@angular/material/paginator';
import { TableService } from '@core/models/tableService.model';
import { PaginationModel } from '@core/models/pagination.model';
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
  pageSizeOptions = [10,20, 50, 100];
  routeTo: string = ""
  public columnsToDisplay: string[] = [];
  public dataSource = new MatTableDataSource<any>();
  constructor(private _liveAnnouncer: LiveAnnouncer,
    private route: ActivatedRoute,
    private router: Router,
    private _restService: RestService) {
  }
  @ViewChild(MatSort) sort!: MatSort;
  //@ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {

    this.columnsToDisplay = this.displayedColumns.map(m => m.reference);
    this.routeTo = getCurrentRoute(this.router.url)
    const q = [
      `${this.serviceName}/get/`,
      `?page=1&limit=${this.pageSize}`,
      `&order=-1`,
    ];
    //try {
      //this._restService.getActive$(q.join(''))
    this.loadData(q.join(''));
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
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
    this.router.navigate([`/${this.routeTo}/delete`]);
    //console.log(`redireccionando ${this.routeTo} DELETE con el identificador:${id}`) 
  }
  public redirectToNew= () => {
    this.router.navigate([`/${this.routeTo}/new`]);
    //console.log(`redireccionando ${this.routeTo} DELETE con el identificador:${id}`) 
  }
 
  public doFilter = (event: KeyboardEvent) => {

    const search = (event.target as HTMLTextAreaElement).value;
    this.dataSource.filter = search.trim().toLocaleLowerCase();
  }
  public pageChanged = (e: PageEvent) => {
    console.log(e)
    //this.pageEvent = e;

    const q = [
      `${this.serviceName}/get/`,
      `?page=${e.pageIndex+1}&limit=${e.pageSize}`,
      `&order=-1`,
    ];
    //try {
      //this._restService.getActive$(q.join(''))
    this.loadData(q.join(''));
  }


  loadData(service:string): void {
    console.log(service)
    

    this._restService.getTable$(service)
      .subscribe((response: TableService) => {
       
        const {itemsList,pagination}=response;
        console.log(itemsList)
        this.pageSetValue(pagination)
        this.dataSource.data = itemsList as any

      
      })
  }
  public pageSetValue = (pagination:PaginationModel) => {

    const { 
      totalDocs,
      limit,
      totalPages,
      page,
      pagingCounter,
      hasPrevPage,
      hasNextPage,
      prevPage,
      nextPage}=pagination
    this.length = totalDocs;
    //console.log("total de registros",this.length)
    this.pageSize = limit;
    //this.pageIndex = pagination.pageIndex;
  }
  // handlePageEvent(e: PageEvent) {
  //   this.pageEvent = e;
  //   this.length = e.length;
  //   this.pageSize = e.pageSize;
  //   this.pageIndex = e.pageIndex;
  // }
  // getDataObject(origin:any,property:string): void {
  //   console.log("origin",origin);
  //   const extractedIds = origin.map((e:any) => e[property]);
  //  return  extractedIds
  // }

}


