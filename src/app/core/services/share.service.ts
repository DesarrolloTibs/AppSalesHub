import {EventEmitter, Injectable, Output} from '@angular/core';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {TranslateService} from "@ngx-translate/core";
import {CookieService} from "ngx-cookie-service";
//mport {ModalUserComponent} from "./components/modal-user/modal-user.component";
//import {ModalUpdateComponent} from "./components/modal-update/modal-update.component";
//import {ModalWizardComponent} from "./components/modal-wizard/modal-wizard.component";

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private router: Router,
    private cookie: CookieService,
    private translate: TranslateService) {
}
public parseData = (data: any, source: string = '') => {
  try {
    const tmp:any = [];
    data.docs.map((a: { _id: any; }) => {
      tmp.push({
        ...a, ...{
          router: ['/', source, a._id]
        }
      })
    });
    return tmp;
  } catch (e) {
    return null;
  }
}
public toBase64 = (file: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
public goTo = (source: string = '') => this.router.navigate(['/', source, 'add'])
public confirm = () => new Promise((resolve, reject) => {
  this.translate.get("GENERAL").subscribe((res: string) => {
    // @ts-ignore
    const {ARE_YOU_SURE, ARE_YOU_SURE_SENTENCE, OK, ANY_ISSUE} = res;
    // console.log(res)
    Swal.fire({
      title: ARE_YOU_SURE,
      text: ARE_YOU_SURE_SENTENCE,
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: OK,
      footer: '<a href>' + ANY_ISSUE + '</a>'
    }).then((result) => {
      if (result.value) {
        resolve(true)
      } else {
        reject(false)
      }
    }).then()
  });

})
  public getUserInfo = () => {
    try {
      return JSON.parse(this.cookie.get('user'))
    } catch (e) {
      return null
    }
  }

  public getSettings = () => {
    try {
      return JSON.parse(this.cookie.get('settings'))
    } catch (e) {
      return null
    }
  }
}
