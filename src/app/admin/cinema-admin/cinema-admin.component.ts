import { Component, OnInit } from '@angular/core';
import {VilleAdminService} from "../../services/ville-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CinemaAdminService} from "../../services/cinema-admin.service";
import {Cinema} from "../../model/Cinema";

@Component({
  selector: 'app-cinema-admin',
  templateUrl: './cinema-admin.component.html',
  styleUrls: ['./cinema-admin.component.css']
})
export class CinemaAdminComponent implements OnInit {

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc:string="";
  public code:number = 0;
  public pages!: Array<number>;

  constructor(private cinemaAdminService:CinemaAdminService,private villeService:VilleAdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ongetCinemas();
  }

  ongetCinemas() {
    this.size = 2;
    this.code=2;
    this.cinemaAdminService.getCinemaPage(this.currentmc,this.currentpage, this.size)
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
    this.ongetCinemas();
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetCinemas();
  }

  ondeletecinema(c: any) {
    console.log(c);
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.dellet(c)
        .subscribe((data:any)=>{
          this.ongetCinemas();
        },(err:any)=>{
          return console.log(err);
        })
    }
  }

  onNewEntity() {
    if(this.code == 2){
      this.router.navigateByUrl("admin/new-cinema-admin");
    }
  }

  onEditcinema(c: any) {
    console.log(c);
    let url = btoa(c._links.cinema.href.replace("{?projection}",""));
    this.router.navigateByUrl("admin/edit-cinema-admin/"+url);
  }

  ongeneratePDF() {
    this.cinemaAdminService.getPDF()
      .subscribe((data:any)=>{

      },(err:any)=>{})
  }

  ongenerateFilmsPDF() {
    this.cinemaAdminService.getFilmsPDF()
      .subscribe((data:any)=>{

      },(err:any)=>{})
  }
}
