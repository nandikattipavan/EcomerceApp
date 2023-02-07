import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:9090";
  requestHeader=new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private httpclient:HttpClient,private userauth:UserAuthService) { }
  public login(loginData:{userName:string,userPassword:string}){
    return this.httpclient.post(this.url+"/authenticate",loginData,{headers:this.requestHeader});
  }


  public forUser() {
    return this.httpclient.get(this.url + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.url + '/forAdmin', {
      responseType: 'text',
    });
  }


  public roleMatch(allowedRoles:string[]): boolean {
    let isMatch = false;
    const userRoles: any = this.userauth.getRoles();
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
          }
        }
      }
    }
    return isMatch;
  }

  public register(registerData){
    return this.httpclient.post(this.url+"/registerNewUser",registerData);
  }
}
