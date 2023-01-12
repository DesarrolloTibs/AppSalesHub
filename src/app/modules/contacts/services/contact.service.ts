import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) {
  }
    /**
   * //TODO {data:[..1,...2,..2]}
   * 
   * @returns 
   */
    getAllContacts$(): Observable<any> {
      return this.http.get(`${this.URL}/contacts/get`)
        .pipe(
          map(({ data:{itemsList} }: any) => {
            console.log("DataService",itemsList)
            return itemsList
          })
        )
    }
}
