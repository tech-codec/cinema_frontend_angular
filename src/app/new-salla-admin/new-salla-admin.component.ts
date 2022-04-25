import { Component, OnInit } from '@angular/core';
import {CinemaAdminService} from "../services/cinema-admin.service";
import {CinemaService} from "../services/cinema.service";
import {Router} from "@angular/router";
import {SalleAdminService} from "../services/salle-admin.service";

@Component({
  selector: 'app-new-salla-admin',
  templateUrl: './new-salla-admin.component.html',
  styleUrls: ['./new-salla-admin.component.css']
})
export class NewSallaAdminComponent implements OnInit {

  code:number=1;
  codesave:number =0;
  public cinemas!:any;
  public id:number=1;
  public url:String="";

  constructor(private salleAdminService:SalleAdminService,private router:Router) { }

  ngOnInit(): void {
    this.ongetCinema();
  }

  onaddSalleToCinema(form: any) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.salleAdminService.geAddSalleToCinema(form,this.id)
        .subscribe((data:any)=>{
          this.codesave = 1;
        },(err:any)=>{
          console.log(err);
        })
    }
  }

  ongetCinema(){
    this.salleAdminService.getCinemas()
      .subscribe((data:any)=>{
        this.cinemas=data;
      },(err:any)=>{

      })
  }

  navAmin() {
    this.codesave==0;
    this.router.navigateByUrl("/admin");
  }


}
