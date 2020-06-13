import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/account';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BankRestserviceService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAccounts(): Observable<any> {
    return this.http.get(endpoint + '/list').pipe(
      map(this.extractData));
  }

  

  getAccount(name): Observable<any> {
    return this.http.get(endpoint + '/listByName/' +  name).pipe(
      map(this.extractData));
  }

  addAccount (account): Observable<any> {
    console.log(account);
    return this.http.post<any>(endpoint + '/open-account', JSON.stringify(account), httpOptions).pipe(
      tap((account) => console.log(`added account w/ id=`)),
      catchError(this.handleError<any>('addAccount'))
    );
  }

  updateAccount (id, account): Observable<any> {
    return this.http.put(endpoint + '/' + id, JSON.stringify(account), httpOptions).pipe(
      tap(_ => console.log(`updated account id=${id}`)),
      catchError(this.handleError<any>('updateAccount'))
    );
  }

  deleteAccount (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'accounts/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted account id=${id}`)),
      catchError(this.handleError<any>('deleteAccount'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


