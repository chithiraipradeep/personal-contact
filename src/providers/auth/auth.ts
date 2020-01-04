import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  createuser(param) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });


    return new Promise((resolve, reject) => {
      this.http.post('http://18.223.116.203/Authentication/ContactSignup', param, options)
        .subscribe((res) => {
          resolve(res.json());
        }
          , (err) => {
            reject(err);
          });
    });

  }

  userlogin(param) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });


    return new Promise((resolve, reject) => {
      this.http.post('http://18.223.116.203/Authentication/LoginUser', param, options)
        .subscribe((res) => {
          resolve(res.json());
        }
          , (err) => {
            reject(err);
          });
    });

  }
}
