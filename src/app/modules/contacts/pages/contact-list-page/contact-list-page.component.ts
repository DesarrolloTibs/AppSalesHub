import { AfterViewInit, Component, Input, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { ContactsModel } from '@core/models/contacts.model';
import { ContactService } from '@modules/contacts/services/contact.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { TableColumns } from '@core/models/tableColumns.model';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router} from '@angular/router';
import { getCurrentRoute } from 'src/app/utils/utils';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit,AfterViewInit, OnDestroy {
  /**
   *Set route component  //Todo:https:localhost:420/contacts/*
   */
  routeTo:string="contacts"
  contactsList: Array<ContactsModel> = [];
  listObservers$: Array<Subscription> = []
  public columnsToDisplay: string[]=[];
  public displayedColumns: Array<TableColumns> = [
    { title: 'Nombre Completo', action: false, reference: 'fullName' },
    { title: 'Telefono Oficina', action: false, reference: 'officePhone' },
    { title: 'Telefono Movil', action: false, reference: 'mobilesPhone' },
    { title: 'Correos', action: false, reference: 'emails' },
    { title: 'Canal', action: false, reference: 'channel' },
    { title: 'Tipo', action: false, reference: 'typeContacts' },
    { title: 'País', action: false, reference: 'country' },
    { title: 'Estado', action: false, reference: 'state' },
    { title: 'Ciudad', action: false, reference: 'city' },
    { title: 'Total Negocio', action: false, reference: 'totalBusiness' },
    { title: 'ver', action: true, reference: 'detail' },
    { title: 'Actualizar', action: true, reference: 'update' }
  ];
  public dataSource = new MatTableDataSource<ContactsModel>();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private _contactService: ContactService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    // const { data }: any = (dataRaw as any).default
    //const { itemsList } = data;
    this.columnsToDisplay=this.displayedColumns.map(m=>m.reference);
    this.loadData()
  }

  loadData(): void {
    this._contactService.getAllContacts$()
      .subscribe((response: ContactsModel[]) => {
        this.dataSource.data = response 
      })
  }

  // async getAllContacts(): Promise<any> {

  //   const data = this._contactService.getAllContacts$();
  //    this.contactsList=await lastValueFrom(data)
  //    this.contactsList=[]

  // }
  ngOnDestroy(): void {

  }
  handleClick = () => {
    //this.setRoute = getCurrentRoute(this.router.url)
    this.router.navigate([`/${this.routeTo}/new`]);
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

