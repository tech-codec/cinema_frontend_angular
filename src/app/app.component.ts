import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CinemaService} from "./services/cinema.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authservice: AuthenticationService, private router: Router, public cinemaService:CinemaService ){}


  register() {
    this.router.navigateByUrl("/register");
  }

  onlogin() {
    this.router.navigateByUrl("/login");
  }

  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
}
