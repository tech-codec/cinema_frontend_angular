import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class VilleAdminService {
  public host: String = 'http://localhost:8080';
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private http: HttpClient,private authservice: AuthenticationService) { }

  getVillePage(currentmc: string, currentpage: number, size: number) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(this.host + "/villes/search/villePage?mc="+currentmc+"&page="+currentpage+"&size="+size,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  dellet(v: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.delete(v._links.self.href,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getResources(url: any):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(url,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  updateville(url: any, form: any):Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.put<any>(url, form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  saveville(url: string, form: any): Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<any>(url, form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  delletCinema(c: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.delete(c._links.self.href,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getvilleById(id: any): Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(this.host+"/villes/"+id+"?projection=ville",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  delletCinemaByid(id: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.delete(this.host+"/cinemas/"+id,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getPDFfilm() {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(this.host+"/PDFfilm/"+15,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
}
