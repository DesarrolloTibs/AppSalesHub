import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  @Output() catchError = new EventEmitter<any>();
  public headers!: HttpHeaders;
  public readonly url: string = environment.api;
  constructor(public http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private translate: TranslateService
  ) { }

  clearSession = () => {
    this.cookieService.delete('session', ' / ');
    this.cookieService.delete('user', ' / ');
    this.router.navigate(['/', 'list']);
  };

  parseHeader = (custom: any = null) => {
    const token = this.cookieService.get('session');
    let header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:''
    };
    if (custom) {
      header = custom
    }
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }

  
    return new HttpHeaders(header);
  };

  handleError = (code = 401, message = '', e: any = {}) => { 
    try {
      let error = '';
      let subTitle = '';
      let parameterMissing = '';
      this.translate.get('ERROR.LABEL').subscribe((res: string) => {
        error = res;
      });
      this.translate.get('ERROR.SUB_LABEL').subscribe((res: string) => {
        subTitle = res;
      });

      this.translate.get('ERROR.PARAMETER_MISSING').subscribe((res: string) => {
        parameterMissing = res;
      });

      this.catchError.emit({
        code,
        message,
        e
      })
      return 500;
    } catch (e) {
      this.cookieService.delete('session');
      this.cookieService.delete('user');
      return 422;
    }

  };

  //{headers: this.parseHeader(header)}//TODOHEader Token

  /**
   * 
   * @param path 
   * @param body 
   * @param toast 
   * @param header 
   * @returns 
   */
  post$(path = '', body = {}, toast = true, header: any = null): Observable<any> {
    try {
      return this.http.post(`${this.url}/${path}`, body)
        .pipe(
          map(({ data }: any) => {
           
            return data
          }),
          catchError((e: any) => {
            this.handleError(e.status, e.statusText, e.error);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
              e
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }
  /**
   * 
   * @param path 
   * @param body 
   * @param toast 
   * @returns 
   */
  patch$(path = '', body = {}, toast = true): Observable<any> {
    try {
      return this.http.patch(`${this.url}/${path}`, body)
        .pipe(
          map(({ data }: any) => {
          
            return data
          }),
          catchError((e: any) => {
            if (toast) {
              // this.sharedService.showError('Error', e.statusText);
            }
            this.handleError(e.status, e.statusText);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }
  /**
   * 
   * @param path 
   * @param toast 
   * @returns 
   */

  getTable$(path = '', toast = true): Observable<any> {
    try {
      return this.http.get(`${this.url}/${path}`,{headers: this.parseHeader()})
        .pipe(
           map(({ data:{itemsList,pagination} }: any) => {
         
            return {itemsList,pagination}
          }),
          catchError((e: any) => {
         
            if (toast) {
              // this.sharedService.showError('Error', e.statusText);
            }
            this.handleError(e.status, e.statusText);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }
  get$(path = '', toast = true): Observable<any> {
    try {
      return this.http.get(`${this.url}/${path}/get`,{headers: this.parseHeader()})
        .pipe(
           map(({ data:{itemsList} }: any) => {
           
            return itemsList
          }),
          catchError((e: any) => {

            if (toast) {
              // this.sharedService.showError('Error', e.statusText);
            }
            this.handleError(e.status, e.statusText);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }
  /**
   * 
   * @param path 
   * @param toast 
   * @returns 
   */
  getActive$(path = '', toast = true): Observable<any> {
    try {
      return this.http.get(`${this.url}/${path}`,{headers: this.parseHeader()})
        .pipe(
           map(({ data:{itemsList} }: any) => {
          
            return itemsList
          }),
          catchError((e: any) => {
           
            if (toast) {
              // this.sharedService.showError('Error', e.statusText);
            }
            this.handleError(e.status, e.statusText);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }
    /**
   * 
   * @param path 
   * @param toast 
   * @returns 
   */
    getCheck$(path = '', toast = true): Observable<any> {
      try {
        return this.http.get(`${this.url}/${path}`,{headers: this.parseHeader()})
          .pipe(
             map(({ data }: any) => {
             
              return data
            }),
            catchError((e: any) => {
         
              if (toast) {
                // this.sharedService.showError('Error', e.statusText);
              }
              this.handleError(e.status, e.statusText);
              return throwError(() => ({
                status: e.status,
                statusText: e.statusText,
              }));
            }),
          );
      } catch (e: any) {
        throw new Error(e);
      }
    }
   /**
   * 
   * @param path 
   * @param toast 
   * @returns 
   */
   getById$(path = '',param='', toast = true): Observable<any> {
    try {
     
      return this.http.get(`${this.url}/${path}/get/${param}`,{headers: this.parseHeader()})
        .pipe(
           map(({ data }: any) => {
          
            return data
          }),
          catchError((e: any) => {
   
            if (toast) {
              // this.sharedService.showError('Error', e.statusText);
            }
            this.handleError(e.status, e.statusText);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }

  /**
   * 
   * @param path 
   * @param toast 
   * @returns 
   */
  delete$(path = '', toast = true): Observable<any> {
    try {
      return this.http.delete(`${this.url}/${path}`)
        .pipe(
          map(({ data }: any) => {
        
            return data
          }),
          catchError((e: any) => {
            if (toast) {
              // this.sharedService.showError('Error', e.statusText);
            }
            this.handleError(e.status, e.statusText);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }
  restore$(path = '',body='', toast = true): Observable<any> {
    try {
      return this.http.put(`${this.url}/${path}`,body)
        .pipe(
          map(({ data }: any) => {
        
            return data
          }),
          catchError((e: any) => {
            if (toast) {
              // this.sharedService.showError('Error', e.statusText);
            }
            this.handleError(e.status, e.statusText);
            return throwError(() => ({
              status: e.status,
              statusText: e.statusText,
            }));
          }),
        );
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
