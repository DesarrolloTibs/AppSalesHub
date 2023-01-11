import { AfterViewInit, Component, Input, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { TableColumns } from '@core/models/tableColumns.model';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router} from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';
@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent  implements OnInit, AfterViewInit {
  @Input() displayedColumns:Array<TableColumns>=[]
  @Input() data=[]
  routeTo:string=""
  public columnsToDisplay: string[]=[];
  constructor(private _liveAnnouncer: LiveAnnouncer,private route: ActivatedRoute, private router: Router) {}
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    const itemsList= this.data;
    //this.dataSource.data = [];
    this.dataSource.data = itemsList;
    this.columnsToDisplay=this.displayedColumns.map(m=>m.reference);
    
    //this.router.url.split("/")[1]
    console.log("route Current",getCurrentRoute(this.router.url))
  
    this.routeTo=getCurrentRoute(this.router.url)
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
   public doFilter = (event:KeyboardEvent) => {

    const search=(event.target as HTMLTextAreaElement).value;
    this.dataSource.filter = search.trim().toLocaleLowerCase();
  }
  public pageChanged = (event:any) => {
    console.log(event)
  }

}

