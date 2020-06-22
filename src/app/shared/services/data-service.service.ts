import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  userData: any;
  constructor(private http: HttpClient) { }
  loginUser(url, params): Observable<any>{
    return this.http.post(url, params, {headers:
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }});
  }
  setUserData(data){
    this.userData = data;
  }
  getUserData(){
    return this.userData;
  }
}
