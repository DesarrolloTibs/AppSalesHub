import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '@core/services/rest.service';
import { routeEnpoints } from 'src/app/global/endpoints';
import { VendorsModel } from '@core/models/vendors.model';
@Component({
  selector: 'app-form-vendor',
  templateUrl: './form-vendor.component.html',
  styleUrls: ['./form-vendor.component.scss']
})
export class FormVendorComponent implements OnInit {
  public id: string = "";
  dataform: VendorsModel = {
    _id: '',
    fullName: '',
    phones: [],
    emails: [],
    organization: '',
    manager: '',
    rfc: '',
    address: '',
    zones: [],
  
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
        phones: [null,[Validators.required]],
      
        emails: [null, [Validators.required]],
        organization: [null, [Validators.required]],
        manager: [null, [Validators.required]],
        zones: [null,[Validators.required]],
        address: [null,[Validators.required]],
        rfc: [null,[Validators.required]],
        
 

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
  sendData(): void {
    //const {email,password} = this.form.value;

    console.log("data update", this.form.value)
    //this._AuthService.sendCredentials(email,password)
    //console.log(body)
    this.InsertData()


  }
  clearData(): void {
    this.form.reset();
  }
  loadDataById(_id: string): void {
    console.log(routeEnpoints.managers)
    this._restService.getById$(routeEnpoints.vendors, _id)
      .subscribe((response: VendorsModel) => {
        console.log(response)
        this.dataform = response

        const { fullName,
          phones,
          
          emails,
          address,
          organization,
          manager,
          rfc,
          zones, } = this.dataform
        this.form.patchValue({
          fullName,
          phones,
          address,
          emails,
          manager,
          organization,
          rfc,
          zones

        });

      })
  }

  InsertData(): void {
    console.log(routeEnpoints.vendors)
    const method = (this.id) ? 'patch' : 'post';
    this._restService[`${method}$`](`${routeEnpoints.vendors}/${(method === 'patch') ? `update/${this.id}` : 'create'}`, this.form.value)
      .subscribe(res => {
        this.router.navigate(['level1/list'])
      })
  }
}
