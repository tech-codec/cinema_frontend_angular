import { Component, OnInit } from '@angular/core';
import {CinemaAdminService} from "../../services/cinema-admin.service";
import {VilleAdminService} from "../../services/ville-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceAdminService} from "../../services/place-admin.service";

@Component({
  selector: 'app-place-admin',
  templateUrl: './place-admin.component.html',
  styleUrls: ['./place-admin.component.css']
})
export class PlaceAdminComponent implements OnInit {

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc:number=1;
  public code:number = 0;
  public pages!: Array<number>;

  constructor(private placeAdminService:PlaceAdminService,private villeService:VilleAdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ongetPlaces();
  }

  ongetPlaces() {
    this.size = 2;
    this.code=4;
    this.placeAdminService.getPlacePage(this.currentmc,this.currentpage, this.size)
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
    this.ongetPlaces();
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetPlaces();
  }

  ondeleteplace(c: any) {
    console.log(c);
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.dellet(c)
        .subscribe((data:any)=>{
          this.ongetPlaces();
        },(err:any)=>{
          return console.log(err);
        })
    }

  }

  onNewEntity() {
    if(this.code == 4){
      this.router.navigateByUrl("admin/new-place-admin");
    }
  }

  onEditplace(c: any) {
    console.log(c);
    let url = btoa(c._links.cinema.href.replace("{?projection}",""));
    this.router.navigateByUrl("admin/edit-place-admin/"+url);
  }

}
