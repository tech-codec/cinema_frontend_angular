import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mode: number = 0;

  public etaConex:number =0;

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();


  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  constructor(public authservice: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  inlogin(user: any) {
    this.authservice.postInlogin(user)
      .subscribe((resp:any)=>{
        this.etaConex = 1;
        let jwtToken = resp.headers.get('Authorization');
        this.authservice.savaToken(jwtToken);
        this.router.navigateByUrl("/accueille");
        this.mode= 0;
        console.log(jwtToken);
      },(err:any)=>{
        this.mode= 1;
      })
  }

  register() {
    this.router.navigateByUrl("/register");
  }
}
