import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor(private userService:UserService){}
  registration(form:NgForm){
    this.userService.register(form.value).subscribe(
    (response)=>{console.log(response);
      form.reset();
    },error=>{console.log(error)}
    )
  }
}
