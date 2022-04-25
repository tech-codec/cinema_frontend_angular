import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cinema} from "../model/Cinema";

@Injectable({
  providedIn: 'root'
})
export class SalleAdminService {

  public host: String = 'http://localhost:8080';
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private authservice:AuthenticationService, private http: HttpClient) { }

  getSallePage(currentmc: string, currentpage: number, size: number) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(this.host + "/salles/search/sallepage/?projection=salle&mc="+currentmc+"&page="+currentpage+"&size="+size,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  geAddSalleToCinema(form: any,id:number):Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<any>(this.host+"/addSalleToCinema/"+id,form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getResources(url: any):Observable<Cinema>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<Cinema>(url,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
  updatesalle(url: any, form: Cinema):Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.put<Cinema>(url, form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
  public getCinemas(){
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return  this.http.get(this.host + '/cinemas',{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
}
