import {EventEmitter, Injectable, Output} from '@angular/core';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {TranslateService} from "@ngx-translate/core";
import {CookieService} from "ngx-cookie-service";
import { RestService } from './rest.service';
//mport {ModalUserComponent} from "./components/modal-user/modal-user.component";
//import {ModalUpdateComponent} from "./components/modal-update/modal-update.component";
//import {ModalWizardComponent} from "./components/modal-wizard/modal-wizard.component";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  @Output() limitAccount = new EventEmitter<any>();
  constructor(private router: Router,
    private cookie: CookieService,
    private translate: TranslateService,
    private _restService:RestService) {
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
    // 
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

public openUpdateModal = (data: any = {}) => {
  const initialState = {
    section: data
  };
  // this.bsModalRef = this.modalService.show(
  //   ModalUpdateComponent,
  //   Object.assign({initialState}, {
  //     class: 'modal-light-upgrade',
  //     ignoreBackdropClick: true
  //   })
  // );
}
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
  parseDataSelect = (data: any) => {
    const tmp:any = [];
  
     data.map((a: { _id: string;fullname:string }) => tmp.push({
      ...a, ...{
         router: ['/', 'inventory', a._id]
       }
    }));
   
    return tmp;
  }
  findSelect = (e:any,route:string)=> new Promise((resolve, reject) => {
    const {term} = e;
    const q = [
      `${route}/get/active`,
      `?filter=${term}`,
      `&fields=fullName`,
      `&page=1&limit=5`,
      `&sort=fullName&order=-1`,
    ];
    try {
      this._restService.getActive$(q.join(''))
      .subscribe(res => {
        if(res){

          resolve([...this.parseDataSelect(res)]);
        }else{
          reject([])
        }
        
      })
    } catch (error) {
      reject([])
    }
  
  })
}
