import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/cinema.service';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public villes!: any;
  public cinemas!: any;
  public salles!: any;
  public currentVille!: any;
  public currentCinema!: any;
  public currentProjection!: any;
  public ticketsSelecteds!: any;
  private progress!: number;
  private timestamp: number = 0;
  constructor( public cineService: CinemaService,  private route: ActivatedRoute,
               private router: Router,) { }

  ngOnInit(): void {
    this.cineService.getVilles()
      .subscribe((data: any) => {
        this.villes = data;
    }, (err: any) => {
        console.log(err);
    });
  }

  onGetcinemas(v: any) {
    this.currentVille = v;
    this.salles = undefined;
     this.cineService.getCinemas(v)
       .subscribe((data: any) => {
         this.cinemas = data;
       }, (err: any) => {
         console.log(err);
       });
  }

  onGetsalles(c: any) {
    this.currentCinema = c
    this.cineService.getSalles(c)
      .subscribe((data: any) => {
        this.salles = data;
        this.salles._embedded.salles.forEach( (salle: any) =>{
          this.cineService.getProjections(salle)
            .subscribe((data: any) => {
              salle.projections = data;
            }, (err: any) => {
              console.log(err);
            });
        })
      }, (err: any) => {
        console.log(err);
      });
  }

  onGetTicketPlaces(p: any) {
    this.currentProjection = p;
    this.cineService.getTicketPlaces(p)
      .subscribe((data: any) => {
        this.currentProjection.tickets = data;
        this.ticketsSelecteds = [];
      }, (err: any) => {
        console.log(err);
      });
  }

  onSelectTicket(t: any) {
    if(!t.selected){
      t.selected = true;
      this.ticketsSelecteds.push(t);
    }
    else{
      t.selected = false;
      this.ticketsSelecteds.splice(this.ticketsSelecteds.indexOf(t),1);
    }
    console.log(this.ticketsSelecteds);
  }


  getTicketClass(t: any) {
   let str = "btn margin ";
   if(t.selected){
     str+="btn-primary"
   }
   else if(t.reservee == true){
     str+="btn-danger";
   }
   else {
     str+="btn-success";
   }
   return str;
  }

  onPayeTickets(formData: any) {
    console.log(formData);
    let tickets: any = [];
    this.ticketsSelecteds.forEach((t:any) =>{
      tickets.push(t.id);
    });
    formData.tickets = tickets;
    this.cineService.PayeTickets(formData)
      .subscribe((data: any) => {
        if(data.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * data.loaded / data.total);
        }else if(data instanceof HttpResponse){
          /*alert('la photo chargee avec succes');*/
          this.timestamp = Date.now();
          alert("Tickets reserves avec succes");
          this.onGetTicketPlaces(this.currentProjection);
        }
      }, (err: any) => {
        console.log(err);
      });

  }

  onGetDetailsFilms(s:any) {
    console.log("cest url:"+'film-detail/'+this.cineService.getDetailsFilms(s));
    this.router.navigateByUrl('accueille/film-detail/'+this.cineService.getDetailsFilms(s));
  }
}
