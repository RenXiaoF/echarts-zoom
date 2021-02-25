import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Util {
  isLoggedIn = false;
  redirectUrl: string;

  userid: string = '';
  usernm: string = '';
  deptid: string = '';

  constructor(private router: Router) { }



  //封装过期控制代码
  setLocalStorage(key,value){
    window.localStorage[key] = value;
  }

  getLocalStorage(key, exp){
     return window.localStorage[key];
  }
}
