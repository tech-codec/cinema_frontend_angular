import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VilleAdminService} from "../services/ville-admin.service";
import {CinemaAdminService} from "../services/cinema-admin.service";
import {CinemaService} from "../services/cinema.service";
import {Cinema} from "../model/Cinema";

@Component({
  selector: 'app-edit-cinema-admin',
  templateUrl: './edit-cinema-admin.component.html',
  styleUrls: ['./edit-cinema-admin.component.css']
})
export class EditCinemaAdminComponent implements OnInit {

  public url!:any;
  public currentcinema!:Cinema;
  public code: number=1;
  public codeup:number=0;
  public villes!:any
  public idVillecurrent:number=2;
  public nameCinemacurent:string="";
  constructor(private router: Router, private cinemaAdmin: CinemaAdminService, private cinemaService:CinemaService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ongetCinema();
    this.ongetVille();
  }

  ongetCinema(){
    this.url = atob(this.route.snapshot.params.url);
    console.log(this.url)
    this.cinemaAdmin.getResources(this.url)
      .subscribe((data:Cinema)=>{
        this.currentcinema = data;
        this.idVillecurrent = data.ville.id;
      },(err:any)=>{
        console.log(err);
      })
  }

  ongetVille(){
    this.cinemaService.getVilles()
      .subscribe((data:any)=>{
        this.villes=data;
      },(err:any)=>{

      })
  }

  onUpdateCinema(form: Cinema) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.cinemaAdmin.updatecinema(this.url,form)
        .subscribe((data:Cinema)=>{
          data.ville.id = this.idVillecurrent;
          console.log(data);
          this.codeup = 1;
        },(err:any)=>{
          return console.log(err);
        })
    }

  }

  navAmin() {
    this.codeup==0;
    this.router.navigateByUrl("/admin");
    console.log(this.currentcinema.ville.name);
  }
}
