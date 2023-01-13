import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.scss']
})
export class FormContactsComponent implements OnInit {
  public id: string = "";
  form: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder) {
}
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log("params",params['id'])
      this.id = (params['id'] === 'add') ? "" : params['id'];

    });
    const method = (this.id) ? 'patch' : 'post';
    console.log(this.id)
    console.log(method)
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dob: [null, [Validators.required]],
      address: [null],
      country: [null],
      gender: [null]
    });
  }
  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
}
