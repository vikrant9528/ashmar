import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let data:any = JSON.parse(localStorage.getItem('user'))
     console.log(data,'data from authorization');
    if(data.length===0){
      console.log('i am here');
      return false;
    }else{
      console.log('true conditon is run');
      return true;
    }

    
  }
  
}
