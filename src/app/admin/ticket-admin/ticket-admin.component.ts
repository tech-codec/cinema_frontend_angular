import { Component, OnInit } from '@angular/core';
import {CinemaAdminService} from "../../services/cinema-admin.service";
import {VilleAdminService} from "../../services/ville-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TicketAdminService} from "../../services/ticket-admin.service";

@Component({
  selector: 'app-ticket-admin',
  templateUrl: './ticket-admin.component.html',
  styleUrls: ['./ticket-admin.component.css']
})
export class TicketAdminComponent implements OnInit {

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc!:number;
  public code:number = 0;
  public pages!: Array<number>;

  constructor(private ticketAdminService:TicketAdminService,private villeService:VilleAdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ongetTickets();
  }

  ongetTickets() {
    this.size = 2;
    this.code=6;
    this.ticketAdminService.getTicketPage(this.currentmc,this.currentpage, this.size)
      .subscribe((data:any)=>{
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.Entite = data;
      },(err:any)=>{
        console.log(err);
      })
  }



  ongetPage(i: number) {
    this.currentpage = i;
    this.ongetTickets();
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetTickets();
  }

  ondeleteticket(c: any) {
    console.log(c);
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.dellet(c)
        .subscribe((data:any)=>{
          this.ongetTickets();
        },(err:any)=>{
          return console.log(err);
        })
    }

  }

  onNewEntity() {
    if(this.code == 6){
      this.router.navigateByUrl("admin/new-ticket-admin");
    }
  }

  onEditticket(c: any) {
    console.log(c);
    let url = btoa(c._links.cinema.href.replace("{?projection}",""));
    this.router.navigateByUrl("admin/edit-ticket-admin/"+url);
  }

}
