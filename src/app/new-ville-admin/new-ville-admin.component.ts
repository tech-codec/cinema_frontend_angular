import { Component, OnInit } from '@angular/core';
import {VilleAdminService} from "../services/ville-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-ville-admin',
  templateUrl: './new-ville-admin.component.html',
  styleUrls: ['./new-ville-admin.component.css']
})
export class NewVilleAdminComponent implements OnInit {
  code:number=1;
  codesave:number =0;

  constructor(private villeService: VilleAdminService, private router:Router) { }

  ngOnInit(): void {
  }

  onSaveVille(form: any) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.saveville(this.villeService.host+"/villes", form)
        .subscribe((data:any)=>{
          this.codesave = 1;
        },(err:any)=>{
          console.log(err);
        })
    }
  }
  navAmin() {
    this.codesave==0;
    this.router.navigateByUrl("/admin");
  }
}
