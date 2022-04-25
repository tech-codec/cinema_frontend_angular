import { Component, OnInit } from '@angular/core';
import {VilleAdminService} from "../services/ville-admin.service";
import {Router} from "@angular/router";
import {CinemaAdminService} from "../services/cinema-admin.service";
import {CinemaService} from "../services/cinema.service";

@Component({
  selector: 'app-new-cinema-admin',
  templateUrl: './new-cinema-admin.component.html',
  styleUrls: ['./new-cinema-admin.component.css']
})
export class NewCinemaAdminComponent implements OnInit {

  code:number=1;
  codesave:number =0;
  public villes!:any;
  public id:number=1;
  public url:String="";

  constructor(private cinemaAdminService: CinemaAdminService,private cinemaService:CinemaService, private router:Router) { }

  ngOnInit(): void {
    this.ongetVille();
  }

  onaddCinemaToville(form: any) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.cinemaAdminService.geAddCinemaToVille(form,this.id)
        .subscribe((data:any)=>{
          this.codesave = 1;
        },(err:any)=>{
          console.log(err);
        })
    }
  }

  ongetVille(){
    this.cinemaService.getVilles()
      .subscribe((data:any)=>{
        this.villes=data;
      },(err:any)=>{

      })
  }

  navAmin() {
    this.codesave==0;
    this.router.navigateByUrl("/admin");
  }

}
