import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TableGridService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) {
  }
    /**
   * //TODO {data:[..1,...2,..2]}
   * 
   * @returns 
   */
    getAllData$( route:string): Observable<any> {
      return this.http.get(`${this.URL}/${route}/get`)
        .pipe(
          map(({ data:{itemsList} }: any) => {
            console.log("DataService",itemsList)
            return itemsList
          })
        )
    }
}
