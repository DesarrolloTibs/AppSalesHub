import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

import {CookieService} from "ngx-cookie-service";
import {RestService} from "@core/services/rest.service";
import {ShareService} from "@core/services/share.service";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private rest: RestService,
    private router: Router,
    private share: ShareService,
    private cookieService: CookieService) { }


  // sendCredentials(email:string,password:string):void{

  //   console.log('OKOK', email,password)
  // }
  public login = (data: any) => new Promise((resolve, reject) => {

    // getAllData$( route:string): Observable<any> {
    //   return this.http.get(`${this.URL}/${route}/get`)
    //     .pipe(
    //       map(({ data:{itemsList} }: any) => {
    //         console.log("DataService",itemsList)
    //         return itemsList
    //       })
    //     )
    // }
    this.rest.post$(`login`,
      data)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.cookieService.set(
            'session',
            res.session,
            environment.daysTokenExpire,
            '/');
          this.cookieService.set(
            'user',
            JSON.stringify(res.user),
            environment.daysTokenExpire,
            '/');
          this.cookieService.set(
            'settings',
            JSON.stringify(res.settings),
            environment.daysTokenExpire,
            '/');
          resolve(res);
        },
        error:(error)=>{
          reject(error);
        },
        complete:()=>{
          
        }

      });
  });

  public clear = () => {
    this.cookieService.delete('session', '/');
    this.cookieService.delete('user', '/');
  }
  public logout = () => new Promise((resolve, reject) => {
    try {
      this.clear();
      resolve(true);
    } catch (e) {
      reject(false);
    }
  });

  checkSession = (verify = false, redirect = true, extra: any = {}) => {
    return new Promise((resolve, reject) => {
        if (this.cookieService.check('session')) {
          this.rest.getCheck$(`token`).subscribe({
            next:(res)=>{
              console.log("Datos Check out",res)
              if (res.user &&
                (res.user.role === 'admin') &&
                (!res.settings.currency || !res.settings.logo || !res.settings.currencySymbol || !res.settings.name)) 
                {
                //this.openWizard()
              }
              if (res.parentAccount && res.parentAccount.status) {
                this.share.limitAccount.emit(res.parentAccount)
              }
              this.cookieService.set(
                'session',
                res.session,
                environment.daysTokenExpire,
                '/');
              reject(false)
            },
            error:(error)=>{
              this.clear();
              this.redirectLogin();
            },
            complete:()=>{
              
            }
    
          })
          resolve(true);
        } else {

          console.log("NO COOKIE")
          //reject(false);
          redirect ? this.redirectLogin() : null;
          
        }
      }
    );
  };

  redirectLogin = () => {
    this.router.navigate(['/', 'auth', 'login']);
  }

}
