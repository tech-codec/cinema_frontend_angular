import { Component, OnInit } from '@angular/core';
import {SalleAdminService} from "../services/salle-admin.service";
import {Router} from "@angular/router";
import {TicketAdminService} from "../services/ticket-admin.service";

@Component({
  selector: 'app-new-ticket-admin',
  templateUrl: './new-ticket-admin.component.html',
  styleUrls: ['./new-ticket-admin.component.css']
})
export class NewTicketAdminComponent implements OnInit {

  code:number=1;
  codesave:number =0;
  public projections!:any;
  public places!:any;
  public idpr:number=1;
  public idpl:number=1;
  public url:String="";

  constructor(private ticketAdminService:TicketAdminService,private router:Router) { }

  ngOnInit(): void {
    this.ongetProjection();
    this.ongetPlace();
  }

  onaddTicketToProjectionAndPlace(form: any) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.ticketAdminService.geAddTicketToProjectionAndPlace(form,this.idpr,this.idpl)
        .subscribe((data:any)=>{
          this.codesave = 1;
        },(err:any)=>{
          console.log(err);
        })
    }
  }

  ongetProjection(){
    this.ticketAdminService.projections()
      .subscribe((data:any)=>{
        this.projections=data;
      },(err:any)=>{

      })
  }

  ongetPlace(){
    this.ticketAdminService.places()
      .subscribe((data:any)=>{
        this.places=data;
      },(err:any)=>{

      })
  }

  navAmin() {
    this.codesave==0;
    this.router.navigateByUrl("/admin");
  }

}
