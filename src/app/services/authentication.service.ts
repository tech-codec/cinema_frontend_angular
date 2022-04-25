import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public jwtToken!: any;
  public roles: Array<any>=[];

  public host: string = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  postInlogin(user: any):Observable<any> {
    return this.http.post<any>(this.host+"/login",user,{observe:'response'});
  }

  savaToken(jwt:string){
    this.jwtToken = jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken(){
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }

  getTasks(){
    if(this.jwtToken==null)this.jwtToken = this.loadToken();
    return this.http.get(this.host+"/tasks", {headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  logout(){
    this.jwtToken = null;
    localStorage.removeItem('token');
  }


  isAdmin(){
    for(let r of this.roles){
      if(r.authority=='ADMIN') return true;
    }
    return false;
  }

  newTask(formtask: any):Observable<any> {
    return this.http.post<any>(this.host+"/tasks", formtask, {headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  adduser(userform: any):Observable<any> {
    return this.http.post<any>(this.host+"/register",userform);
  }
}

