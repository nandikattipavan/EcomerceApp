import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userauth:UserAuthService,private router:Router,public userService:UserService){}
  public isLoggedin(){
    return this.userauth.isLoggedIn();
  }
  public logout(){
    this.userauth.clear();
    this.router.navigate(['/home']);
  }
  public isAdmin(){
    return this.userauth.isAdmin();
  }
  public isUser(){
    return this.userauth.isUser();
  }
}

