import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '@core/services/rest.service';
import { routeEnpoints } from 'src/app/global/endpoints';
import { ContactsModel } from '@core/models/contacts.model';

@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.scss']
})
export class FormContactsComponent implements OnInit, AfterViewInit {
  public id: string = "";
  dataform: ContactsModel = {
    _id: '',
    fullName: '',
    officePhone: [],
    mobilesPhone: [],
    emails: [],
    channel: '',
    typeContacts: '',
    country: '',
    state: '',
    city: '',
    totalBusiness: 0
  };
  form: FormGroup = new FormGroup({});
  routeTo: string = ""

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder,
    private _restService: RestService) {
  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log("params", params['id'])
      this.id = (params['id'] === 'add') ? "" : params['id'];
      if (this.id !== "") {

        this.loadDataById(this.id)
        //this.form.patchValue(this.dataform);
        console.log("Editar", this.dataform.fullName)

      }
      this.form = this.fb.group({
        fullName: [null, [Validators.required, Validators.minLength(10)]],
        officePhone: [null,],
        mobilesPhone: [null,],
        emails: [null, [Validators.required]],
        channel: [null, [Validators.required]],
        typeContacts: [null, [Validators.required]],
        country: [null,],
        state: [null,],
        city: [null,],
        totalBusiness: [null,],
        // email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        // dob: [null, [Validators.required]],
        // address: [null],
        // country: [null],
        // gender: [null]
      });
    });
    const method = (this.id) ? 'patch' : 'post';
    console.log(this.id)
    console.log(method)


  }
  ngAfterViewInit(): void {


  }
  sendData(): void {
    //const {email,password} = this.form.value;

    console.log("data update", this.form.value)
    //this._AuthService.sendCredentials(email,password)
    //console.log(body)
    this.InsertData()


  }

  loadDataById(_id: string): void {
    console.log(routeEnpoints.contacts)
    this._restService.getById$(routeEnpoints.contacts, _id)
      .subscribe((response: ContactsModel) => {
        console.log(response)
        this.dataform = response

        const { fullName,
          officePhone,
          mobilesPhone,
          emails,
          channel,
          typeContacts,
          country,
          state,
          city,
          totalBusiness } = this.dataform
        this.form.patchValue({
          fullName,
          officePhone,
          mobilesPhone,
          emails,
          channel,
          typeContacts,
          country,
          state,
          city,
          totalBusiness

        });

      })
  }

  InsertData(): void {
    console.log(routeEnpoints.contacts)
    const method = (this.id) ? 'patch' : 'post';
    this._restService[`${method}$`](`${routeEnpoints.contacts}/${(method === 'patch') ? `update/${this.id}` : 'create'}`, this.form.value)
      .subscribe(res => {
        this.router.navigate(['contacts/list'])
      })
  }
}
