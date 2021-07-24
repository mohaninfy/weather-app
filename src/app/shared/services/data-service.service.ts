import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  userData: any;
  constructor(private http: HttpClient) { }
  loginUser(url, params): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post(url, params, httpOptions);
  }
  setUserData(data){
    this.userData = data;
  }
  getUserData(){
    return this.userData;
  }
  getForeCast(url): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get(url,  httpOptions);
  }
}
