import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteModel } from '@core/models/notes.model';

import { RestService } from '@core/services/rest.service';
import { CookieService } from "ngx-cookie-service";
import { routeEnpoints } from 'src/app/global/endpoints';


@Component({
  selector: 'app-dialog-form-note',
  templateUrl: './dialog-form-note.component.html',
  styleUrls: ['./dialog-form-note.component.scss']
})

export class DialogFormNoteComponent implements OnInit {
  public modulesQuill = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ font: [] }],
      [{ color: [] }, { background: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered'}, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ]
  };
  public id: string = "";
  public serviceName: string = "";
  public idContact: string = "";
  dataform: NoteModel = {
    description: '',
    creator: '',
    creatorName: '',
    contact: ''
  };
  form: FormGroup = new FormGroup({});
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string, toggle: true, serviceName: string, idContact: string }, public dialogRef: MatDialogRef<DialogFormNoteComponent>,
    private fb: FormBuilder,
    public _restService: RestService,
    private cookieService: CookieService,
    private route: Router) {
    this.id = data.id
    this.idContact = data.idContact
    this.serviceName = data.serviceName

    //const user = route.snapshot.data.user;

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {

    //let params=(collectRouteParams(this.route))
    //this.idContact= (params as ObjectValue).id
    // this.route.snapshot.params(
    //   (params) => 
    //   {  
    //                
    //    });

    if (this.id !== "") {

      this.loadDataById(this.id)
      //this.form.patchValue(this.dataform);
      //

    }
    this.form = this.fb.group({
      description: [null, [Validators.required, Validators.minLength(10)]],
      creator: [null],
      creatorName: [null],
      contact: [null]
      //
      // email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      // dob: [null, [Validators.required]],
      // address: [null],
      // country: [null],
      // gender: [null]
    });

  }

  sendData(): void {
    //const {email,password} = this.form.value;


    //this._AuthService.sendCredentials(email,password)
    //
    this.InsertData()


  }
  clearData(): void {
    this.form.reset();
  }

  loadDataById(_id: string): void {

    this._restService.getById$(routeEnpoints.notes, _id)
      .subscribe((response: NoteModel) => {

        this.dataform = response

        const {
          description,
          creator,
          creatorName,
          contact,
        } = this.dataform
        this.form.patchValue({
          description
        });


      })
  }

  InsertData(): void {
    const userData = JSON.parse(this.cookieService.get('user'));

    const method = (this.id) ? 'patch' : 'post';

    this.form.patchValue({ contact: this.idContact, creator: userData._id, creatorName: userData.name })
    //this.dialogRef.close();

    this._restService[`${method}$`](`${this.serviceName}/${(method === 'patch') ? `update/${this.id}` : 'create'}`, this.form.value)
      .subscribe(res => {

        if (res) {


          // this.route.navigate([this.route.url])
          this.onNoClick();
        }

        //this.route.navigate(['contacts/detail/63d1c5b5d9131813199caaa8/notes'])
      })
  }


}
