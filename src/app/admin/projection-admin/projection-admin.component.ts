import { Component, OnInit } from '@angular/core';
import {CinemaAdminService} from "../../services/cinema-admin.service";
import {VilleAdminService} from "../../services/ville-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectionAdminService} from "../../services/projection-admin.service";

@Component({
  selector: 'app-projection-admin',
  templateUrl: './projection-admin.component.html',
  styleUrls: ['./projection-admin.component.css']
})
export class ProjectionAdminComponent implements OnInit {

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc:number=100;
  public code:number = 0;
  public pages!: Array<number>;

  constructor(private projectionAdminService:ProjectionAdminService,private villeService:VilleAdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ongetProjections();
  }

  ongetProjections() {
    this.size = 2;
    this.code=5;
    this.projectionAdminService.getProjectionPage(this.currentmc,this.currentpage, this.size)
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
    this.ongetProjections();
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetProjections();
  }

  ondeleteprojection(c: any) {
    console.log(c);
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.dellet(c)
        .subscribe((data:any)=>{
          this.ongetProjections();
        },(err:any)=>{
          return console.log(err);
        })
    }

  }

  onNewEntity() {
    if(this.code == 5){
      this.router.navigateByUrl("admin/new-projection-admin");
    }
  }

  onEditprojection(c: any) {
    console.log(c);
    let url = btoa(c._links.cinema.href.replace("{?projection}",""));
    this.router.navigateByUrl("admin/edit-projection-admin/"+url);
  }

}
