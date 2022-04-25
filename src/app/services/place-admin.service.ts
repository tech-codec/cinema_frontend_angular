import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cinema} from "../model/Cinema";

@Injectable({
  providedIn: 'root'
})
export class PlaceAdminService {
  public host: String = 'http://localhost:8080';
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private authservice:AuthenticationService, private http: HttpClient) { }

  getPlacePage(currentmc: number, currentpage: number, size: number) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(this.host + "/places/search/placePage/?projection=place&mc="+currentmc+"&page="+currentpage+"&size="+size,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  geAddPlaceToSalle(form: any,id:number):Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<any>(this.host+"/addPlaceToSalle/"+id,form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getResources(url: any):Observable<Cinema>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<Cinema>(url,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
  updateplace(url: any, form: Cinema):Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.put<Cinema>(url, form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getSalles() {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return  this.http.get(this.host + '/salles',{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
}
