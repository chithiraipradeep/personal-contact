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
    createuser(mobile,password) {
      return new Promise((resolve, reject) => {
        this.http.post(`http://icgiccs.com/app-digitalbizcards/API/Authentication/register?mobile=`+mobile+"&password="+password, {})
        .subscribe((res) => {
          resolve(res);
        }
        , (err) => {
          reject(err);
        });
      });

    }

    login(mobile,password) {
      return new Promise((resolve, reject) => {
        this.http.post(`http://icgiccs.com/app-digitalbizcards/API/Authentication/loginMe?mobile=`+mobile+"&password="+password,{} )
        .subscribe((res) => {
          resolve(res);
        }
        , (err) => {
          reject(err);
        });
      });

    }

    getpdf(userId) {
      return new Promise((resolve, reject) => {
        this.http.post(`http://icgiccs.com/app-digitalbizcards/API/Authentication/pdf_users?user_id=`+userId,{} )
        .subscribe((res) => {
          resolve(res);
        }
        , (err) => {
          reject(err);
        });
      });

    }

    savedata(userId,status_type,mobile) {
      return new Promise((resolve, reject) => {
        this.http.post(`http://icgiccs.com/app-digitalbizcards/API/Authentication/list_user_share_details?userId=`+userId+"&status_type="+status_type+"&mobile="+mobile,{} )
        .subscribe((res) => {
          resolve(res);
        }
        , (err) => {
          reject(err);
        });
      });
    }

    getsavedata(userId) {
      return new Promise((resolve, reject) => {
        this.http.post(`http://icgiccs.com/app-digitalbizcards/API/Authentication/share_details_users?userId=`+userId,{} )
        .subscribe((res) => {
          resolve(res);
        }
        , (err) => {
          reject(err);
        });
      });

    }


  }
