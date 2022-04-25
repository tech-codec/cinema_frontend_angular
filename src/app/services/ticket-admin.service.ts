import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cinema} from "../model/Cinema";

@Injectable({
  providedIn: 'root'
})
export class TicketAdminService {
  public host: String = 'http://localhost:8080';
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private authservice:AuthenticationService, private http: HttpClient) { }

  getTicketPage(currentmc: number, currentpage: number, size: number) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(this.host + "/tickets/search/ticketPage/?projection=ticketProjection&mc="+currentmc+"&page="+currentpage+"&size="+size,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  geAddTicketToProjectionAndPlace(form: any,idprojection:number,idPlace:number):Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<any>(this.host+"/addTicketToProjectionAndPlace/"+idprojection+"/"+idPlace,form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getResources(url: any):Observable<Cinema>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<Cinema>(url,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
  updateticket(url: any, form: Cinema):Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.put<Cinema>(url, form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  projections() {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return  this.http.get(this.host + '/projections',{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  places() {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return  this.http.get(this.host + '/places',{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
}
