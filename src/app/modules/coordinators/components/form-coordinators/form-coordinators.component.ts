import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '@core/services/rest.service';
import { routeEnpoints } from 'src/app/global/endpoints';
import { CoordinatorsModel } from '@core/models/coordinators.model';

@Component({
  selector: 'app-form-coordinators',
  templateUrl: './form-coordinators.component.html',
  styleUrls: ['./form-coordinators.component.scss']
})
export class FormCoordinatorsComponent implements OnInit, AfterViewInit {
  public id: string = "";
  public products: any = []
  dataform: CoordinatorsModel = {
    _id: '',
    fullName: '',
    phones: [],
    emails: [],
    organization: '',
    regions: [],
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
        organization: ['', [Validators.required]],
        regions: [null,[Validators.required]],
        zones: [null,[Validators.required]],
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
  clearData(): void {
    this.form.reset();
  }
  loadDataById(_id: string): void {
    console.log(routeEnpoints.coordinators)
    this._restService.getById$(routeEnpoints.coordinators, _id)
      .subscribe((response: CoordinatorsModel) => {
        console.log(response)
        this.dataform = response

        const { fullName,
          phones,
          
          emails,
          
          organization,
          regions,
          zones, } = this.dataform
        this.form.patchValue({
          fullName,
          phones,
  
          emails,
          
          organization,
          regions,
          zones

        });

      })
  }

  InsertData(): void {
    console.log(routeEnpoints.coordinators)
    const method = (this.id) ? 'patch' : 'post';
    this._restService[`${method}$`](`${routeEnpoints.coordinators}/${(method === 'patch') ? `update/${this.id}` : 'create'}`, this.form.value)
      .subscribe(res => {
        this.router.navigate(['level3/list'])
      })
  }
  parseData = (data: any) => {
    const tmp:any = [];
    console.log("Pasrse Data",data)
     data.map((a: { _id: string;fullname:string }) => tmp.push({
      ...a, ...{
         router: ['/', 'inventory', a._id]
       }
    }));
    console.log("Pasrse Data tmp",tmp)
    return tmp;
  }
  srcProduct = (e:any) => {
    const {term} = e;
    const q = [
      `organization/get/active?`,
      `filter=${term}`,
      `&fields=fullName`,
      `&page=1&limit=5`,
      `&sort=fullName&order=-1`,
    ];

    this._restService.getActive$(q.join(''))
      .subscribe(res => {
        console.log("Valores encontrados",res)
        this.products = [...this.parseData(res)];
      })

    console.log("Valores a mostrar",this.products)
  }
  selectProduct = (e:any) => {
    console.log("Selectr",e)
    // if (e.value === 'new') {
    //   this.form.patchValue({manager: null})
    //   this.open()
    // }
  }
}
