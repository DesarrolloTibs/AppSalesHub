import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.scss']
})
export class FormContactsComponent implements OnInit {
  public id: string = "";

  constructor(
    private route: ActivatedRoute,
    public router: Router) {
}
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log("params",params['id'])
      this.id = (params['id'] === 'add') ? "" : params['id'];

    });
    const method = (this.id) ? 'patch' : 'post';
    console.log(this.id)
    console.log(method)
  }
}
