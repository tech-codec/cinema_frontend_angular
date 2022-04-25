import { Component, OnInit } from '@angular/core';
import {SalleAdminService} from "../services/salle-admin.service";
import {Router} from "@angular/router";
import {PlaceAdminService} from "../services/place-admin.service";

@Component({
  selector: 'app-new-place-admin',
  templateUrl: './new-place-admin.component.html',
  styleUrls: ['./new-place-admin.component.css']
})
export class NewPlaceAdminComponent implements OnInit {

  code:number=1;
  codesave:number =0;
  public salles!:any;
  public id:number=1;
  public url:String="";

  constructor(private placeAdminService:PlaceAdminService,private router:Router) { }

  ngOnInit(): void {
    this.ongetSalle();
  }

  onaddPlaceToSalle(form: any) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.placeAdminService.geAddPlaceToSalle(form,this.id)
        .subscribe((data:any)=>{
          this.codesave = 1;
        },(err:any)=>{
          console.log(err);
        })
    }
  }

  ongetSalle(){
    this.placeAdminService.getSalles()
      .subscribe((data:any)=>{
        this.salles=data;
      },(err:any)=>{

      })
  }

  navAmin() {
    this.codesave==0;
    this.router.navigateByUrl("/admin");
  }

}
