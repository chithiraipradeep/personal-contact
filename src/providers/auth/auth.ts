import{HttpClient}from '@angular/common/http'
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }
  createuser(param) {

    return new Promise((resolve, reject) => {
      this.http.post('http://app.digitalbizcards.in/api/login', param)
        .subscribe((res) => {
          resolve(res);
        }
          , (err) => {
            reject(err);
          });
    });

  }

  
}
