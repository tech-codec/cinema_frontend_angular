import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {CinemaService} from "../services/cinema.service";

@Component({
  selector: 'app-accueille',
  templateUrl: './accueille.component.html',
  styleUrls: ['./accueille.component.css']
})
export class AccueilleComponent implements OnInit {

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

  ngOnInit(): void {
  }

  administration() {
    this.router.navigateByUrl("/admin");
  }
}
