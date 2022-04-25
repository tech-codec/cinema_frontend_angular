import { Component, OnInit } from '@angular/core';
import {CinemaService} from "../services/cinema.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {FilmDetailComponent} from "../film-detail/film-detail.component";

@Component({
  selector: 'app-editfilm',
  templateUrl: './editfilm.component.html',
  styleUrls: ['./editfilm.component.css']
})
export class EditfilmComponent implements OnInit {
  public url!: string;
  public currentfilm!:any;
  public currentfilmup!:any;
  public code: number = 1;
  public selectedFiles!: any;
  public progressInfos!:any;
  private currentFileUpload: any;
  private timestamp: number = 0;
  public film!:any;

  constructor(public cinemaSecive: CinemaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ongetdetailfilm();
  }

  ongetdetailfilm(){
    this.url = atob(this.route.snapshot.params.url);
    console.log(this.url);
    this.cinemaSecive.getResource(this.url)
      .subscribe((data:any)=>{
        this.currentfilm = data;
        console.log(this.currentfilm);
        this.timestamp = Date.now();
      },(err:any)=>{
        return err;
      });
  }


  onUpdatefilm(form: any) {
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.cinemaSecive.updatefilm(form,this.url)
        .subscribe((data:any)=>{
          this.currentfilmup = data;
          this.code= 2;
          this.uploadPhoto();
        },(err:any)=>{
          return err;
        })
    }
  }

  onSelectedFile(event: any) {
    this.progressInfos = 0;
    this.selectedFiles = event.target.files;
    this.film = this.currentfilm

  }

  uploadPhoto() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.cinemaSecive.uploadPhotoFilm(this.currentFileUpload, this.film.id).subscribe((event:any) => {
      if(event.type === HttpEventType.UploadProgress){
        this.progressInfos = Math.round(100 * event.loaded / event.total);
      }else if(event instanceof HttpResponse){
        /*alert('la photo chargee avec succes');*/
        this.timestamp = Date.now();
      }
    },(err: any) => {
      alert('Probleme de chargement ');
    });
  }
  getTS() {
    return this.timestamp;
  }

  onafichefilm() {
    this.router.navigateByUrl("");
    this.ongetdetailfilm();
  }


}
