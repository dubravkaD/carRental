import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if (form.valid == true){
      this.authService.login();
      this.router.navigateByUrl('/cars');
    }
    console.log(form);
  }

}
