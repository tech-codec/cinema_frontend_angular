import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host: String = 'http://localhost:8080';
  public jwtToken: string =this.authservice.jwtToken;
  constructor(private http: HttpClient, private authservice: AuthenticationService) { }

  public getVilles(){
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
      return  this.http.get(this.host + '/villes',{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  public getCinemas(v: any){
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(v._links.cinemas.href.replace("{?projection}",""),{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getSalles(c: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(c._links.salles.href.replace("{?projection}",""),{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getProjections(salle: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    let url = salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url + "?projection=p1",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getTicketPlaces(p: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    let url = p._links.tickets.href.replace("{?projection}","");
    return this.http.get(url + "?projection=ticketProjection",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  PayeTickets(formData: any): Observable<HttpEvent<{}>>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    /*return this.http.post(this.host+'/payerTickets', formData);*/
    const req = new HttpRequest('POST', this.host + '/payerTickets', formData, {
      headers: new HttpHeaders({Authorization:this.jwtToken}),
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public getResource(url: any){
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(url,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getDetailsFilms(s: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    let url = s._links.projections.href.replace("{?projection}","");
    return  btoa(url+"?projection=p1");
    /*return this.http.get(url + "?projection=p1");*/
  }

  getCatFilm(filmcat: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    let url = filmcat._links.film.href.replace("{?projection}","");
    return this.http.get(url + "?projection=film",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getCatFilms() {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return  this.http.get(this.host + '/categories',{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getFilms(category: any) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    let url = category._links.films.href.replace("{?projection}","");
    return this.http.get(url + "?projection=film",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  uploadPhotoFilm(file: File, idFilm: any): Observable<HttpEvent<{}>> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host + '/uploadPhoto/' + idFilm, formdata, {
      headers:new HttpHeaders({Authorization:this.jwtToken}),
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  updatefilm(form: any, url: string): Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.put<any>(url,form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
}
