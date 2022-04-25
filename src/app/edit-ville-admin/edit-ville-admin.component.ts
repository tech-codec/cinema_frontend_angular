import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VilleAdminService} from "../services/ville-admin.service";

@Component({
  selector: 'app-edit-ville-admin',
  templateUrl: './edit-ville-admin.component.html',
  styleUrls: ['./edit-ville-admin.component.css']
})
export class EditVilleAdminComponent implements OnInit {

  public url!:any;
  public currentville!:any;
  public code: number=1;
  public codeup:number=0;
  constructor(private router: Router, private villeservice: VilleAdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ongetville();
  }

  ongetville(){
    this.url = atob(this.route.snapshot.params.url);
    this.villeservice.getResources(this.url)
      .subscribe((data:any)=>{
        this.currentville = data;
      },(err:any)=>{
        console.log(err);
      })
  }

  onUpdateville(form: any) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeservice.updateville(this.url,form)
        .subscribe((data:any)=>{
          this.codeup = 1;
        },(err:any)=>{
          return console.log(err);
        })
    }
  }

  navAmin() {
    this.codeup==0;
    this.router.navigateByUrl("/admin");
  }
}
