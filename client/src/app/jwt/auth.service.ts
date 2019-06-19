import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import {tokenNotExpired  } from './index';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router){}
    canActivate(){
        if(tokenNotExpired()){
            return true;
        }else{
            this.router.navigate(['login'])
        }
    }
}

@Injectable()

export class AuthNotGuard implements CanActivate {

  constructor(  private router: Router) {}

  canActivate() {
    if( !tokenNotExpired() ) {
      return true;
    } else {
      
      this.router.navigate(['dashboard']);
      return false;
    }
  }
}