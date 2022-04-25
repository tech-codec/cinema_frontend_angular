import { Component, OnInit } from '@angular/core';
import {CinemaAdminService} from "../../services/cinema-admin.service";
import {VilleAdminService} from "../../services/ville-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SalleAdminService} from "../../services/salle-admin.service";

@Component({
  selector: 'app-salla-admin',
  templateUrl: './salla-admin.component.html',
  styleUrls: ['./salla-admin.component.css']
})
export class SallaAdminComponent implements OnInit {

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc:string="";
  public code:number = 0;
  public pages!: Array<number>;

  constructor(private salleAdminService:SalleAdminService,private villeService:VilleAdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ongetSalles();
  }

  ongetSalles() {
    this.size =5;
    this.code=3;
    this.salleAdminService.getSallePage(this.currentmc,this.currentpage, this.size)
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
    this.ongetSalles();
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetSalles();
  }

  ondeletesalle(s: any) {
    console.log(s);
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.dellet(s)
        .subscribe((data:any)=>{
          this.ongetSalles();
        },(err:any)=>{
          return console.log(err);
        })
    }

  }

  onNewEntity() {
    if(this.code == 3){
      this.router.navigateByUrl("admin/new-salle-admin");
    }
  }

  onEditsalle(c: any) {
    console.log(c);
    let url = btoa(c._links.cinema.href.replace("{?projection}",""));
    this.router.navigateByUrl("admin/edit-salle-admin/"+url);
  }

}
