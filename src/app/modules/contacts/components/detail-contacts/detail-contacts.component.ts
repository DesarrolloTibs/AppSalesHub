
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RestService } from '@core/services/rest.service';
import { routeEnpoints } from 'src/app/global/endpoints';
import { ShareService } from '@core/services/share.service';
import { ContactsDetailModel } from '@core/models/contacts.model';

@Component({
  selector: 'app-detail-contacts',
  templateUrl: './detail-contacts.component.html',
  styleUrls: ['./detail-contacts.component.scss']
})
export class DetailContactsComponent implements OnInit {
  public id: string = "";
  public contacts:ContactsDetailModel={
    _id: '',
    fullName: '',
    officePhone: [],
    mobilesPhone: [],
    emails: [],
    channel: '',
    typeContacts: {tag:''},
    country: '',
    state: '',
    city: '',
    organization: {fullName:''},
    level1: {fullName:''},
    level2: {fullName:''},
    level3: {fullName:''},

    totalBusiness: 0
  };
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _restService: RestService,
    private _shareService: ShareService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.id = (params['id'] === 'add') ? "" : params['id'];
      if (this.id !== "") {

        this.loadDataById(this.id)
        //this.form.patchValue(this.dataform);


      }
      
    });
    
    const method = (this.id) ? 'patch' : 'post';
    
  }

  loadDataById(_id: string): void {

    this._restService.getById$(routeEnpoints.contacts, _id)
      .subscribe((response: ContactsDetailModel) => {

        const {
          _id, 
          fullName,
          officePhone,
          mobilesPhone,
          emails,
          channel,
          typeContacts,
          country,
          state,
          city,
          totalBusiness,
          organization,
          level1,
          level2,
          level3 } = response

          this.contacts={ 
            _id,
            fullName,
            officePhone,
            mobilesPhone,
            emails,
            channel,
            typeContacts,
            country,
            state,
            city,
            totalBusiness,
            organization,
            level1,
            level2,
            level3 }


        
       

        //this.srcTypeContacts(organization)
       
      })
  }
}
