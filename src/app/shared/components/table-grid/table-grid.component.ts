import { AfterViewInit, Component, Input, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { TableColumns } from '@core/models/TableColumns.model';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent  implements OnInit, AfterViewInit {
  @Input() displayedColumns:Array<TableColumns>=[]
  @Input() data=[]
  @Input() route:string=""
  public columnsToDisplay: string[]=[];
  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource = new MatTableDataSource<any>();
  ngOnInit() {
    const itemsList= this.data;
    //this.dataSource.data = [];
    this.dataSource.data = itemsList;
    this.columnsToDisplay=this.displayedColumns.map(m=>m.reference);
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
    console.log(`redireccionando ${this.route} DETALLE con el identificador:${id}`)
  }
  public redirectToUpdate = (id: string) => {
    console.log(`redireccionando ${this.route} ACTUALIZAR con el identificador:${id}`)
  }
  public redirectToDelete = (id: string) => {

    console.log(`redireccionando ${this.route} DELETE con el identificador:${id}`) 
   }
   public doFilter = (event:KeyboardEvent) => {

    const search=(event.target as HTMLTextAreaElement).value;
    this.dataSource.filter = search.trim().toLocaleLowerCase();
  }
  public pageChanged = (event:any) => {
    console.log(event)
  }

}


