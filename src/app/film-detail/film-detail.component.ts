import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CinemaService} from "../services/cinema.service";
import {CinemaComponent} from "../cinema/cinema.component";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  public currentFilm!: any;
  public currentCat!: any;
  public currentCatFilms!: any;
  public film!: any;
  public code: boolean = true;
  public currentPhotopload!: any;
  public editphoto!: boolean;
  public selectedFiles!: any;
  public progressInfos!:any;
  private currentFileUpload: any;
  private timestamp: number = 0;
  public url!: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public cineService: CinemaService) { }

  ngOnInit(): void {
    this.url = atob(this.route.snapshot.params.url);
    this.cineService.getResource(this.url)
      .subscribe((salle: any) => {
        this.currentFilm = salle;
        this.cineService.getCatFilm(salle._embedded.projections[0])
          .subscribe((cate: any) => {
            this.currentCat = cate;
            let catId = this.currentCat.categorie.id;
            this.cineService.getCatFilms()
              .subscribe((cat: any) => {
                this.cineService.getFilms(cat._embedded.categories[catId-1])
                  .subscribe((datafilms: any) => {
                      this.currentCatFilms = datafilms;
                      console.log(this.url);
                  }, (err: any) => {
                    console.log(err);
                  });
              }, (err: any) => {
                console.log(err);
              });
          }, (err: any) => {
            console.log(err);
          });
      }, (err: any) => {
        console.log(err);
      });
    console.log(this.url);
    /*this.cinema.onGetDetailsFilms(url);*/
  }

  onGetDetailscf(cf: any) {
    this.film = cf;
    this.code = false;
    console.log(this.film);
  }

  onEditphoto() {
    this.currentPhotopload = this.film;
    this.editphoto = true;
  }


  onSelectedFile(event: any) {
    this.progressInfos = 0;
    this.selectedFiles = event.target.files;
  }

  uploadPhoto() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.cineService.uploadPhotoFilm(this.currentFileUpload, this.film.id).subscribe((event:any) => {
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

  onEditfilm(film: any) {
    let url = btoa(film._links.self.href);
    this.router.navigateByUrl("accueille/film-edit/"+url);
  }
}
