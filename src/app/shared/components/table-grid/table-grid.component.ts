import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsModel } from '@core/models/contacts.model';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent  implements OnInit {
  @Input() displayedColumns:Array<string>=[]
  @Input() data=[]
  @Input() route:string=""
  

  public dataSource = new MatTableDataSource<any>();
  ngOnInit() {
    const itemsList= this.data;
    console.log(itemsList)
    this.dataSource.data = itemsList;
  }
 
  public redirectToDetails = (id: string) => {
    console.log(`redireccionando ${this.route} con el identificador:${id}`)
  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }

}

