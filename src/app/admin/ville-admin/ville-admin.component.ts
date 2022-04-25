import { Component, OnInit } from '@angular/core';
import {VilleAdminService} from "../../services/ville-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {config} from "rxjs";

@Component({
  selector: 'app-ville-admin',
  templateUrl: './ville-admin.component.html',
  styleUrls: ['./ville-admin.component.css']
})
export class VilleAdminComponent implements OnInit {

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc:string="";
  public code:number = 0;
  public villecurrent!:any;
  public pages!: Array<number>;
  public villetab!:any;
  public cinemaTab:any;
  public salleTab!:Array<any>;
  public projection!:Array<any>;
  public ticket!:Array<any>;
  public place!:Array<any>;
  public tailleV:number=0;
  public taillec:number=0;
  public tailles:number=0;
  public l:number=1;
  public m:number=1;

  constructor(private villeService: VilleAdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ongetvilles();
  }

  ongetvilles() {
    this.size = 2;
    this.code=1;
    this.villeService.getVillePage(this.currentmc,this.currentpage, this.size)
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
    this.ongetvilles();
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetvilles();
  }

  ondeleteville(v: any){
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.getResources(v._links.cinemas.href.replace("{?projection}","?projection=cinema"))
        .subscribe((datacinema:any)=>{
          this.taillec = datacinema._embedded.cinemas.length;
          datacinema._embedded.cinemas.forEach((cinema:any)=>{
            this.villeService.getResources(cinema._links.salles.href.replace("{?projection}","?projection=salle"))
              .subscribe((datasalle:any)=>{
                datasalle._embedded.salles.forEach((salle:any)=>{

                  this.villeService.getResources(salle._links.projections.href.replace("{?projection}","?projection=p1"))
                    .subscribe((dataprojection:any)=>{
                      dataprojection._embedded.projections.forEach((projection:any)=>{
                        this.villeService.getResources(projection._links.tickets.href.replace("{?projection}","?projection=ticketProjection"))
                          .subscribe((dataticket:any)=>{
                            dataticket._embedded.tickets.forEach((ticket:any)=>{
                              this.villeService.dellet(ticket)
                                .subscribe((data)=>{
                                  this.villeService.dellet(projection)
                                    .subscribe((data:any)=>{
                                      this.villeService.dellet(salle)
                                        .subscribe((data:any)=>{
                                          this.villeService.dellet(cinema)
                                            .subscribe((data:any)=>{
                                              this.villeService.dellet(v)
                                                .subscribe((data:any)=>{
                                                  console.log(datacinema._embedded.cinemas.length);
                                                  this.ongetvilles();
                                                },(err:any)=>{
                                                })
                                            },(err:any)=>{})
                                        },(err:any)=>{})
                                    })
                                },(err:any)=>{})
                            })
                            if( dataticket._embedded.tickets.length==0){
                              this.villeService.dellet(projection)
                                .subscribe((data:any)=>{
                                  this.villeService.dellet(salle)
                                    .subscribe((data:any)=>{
                                      this.villeService.dellet(cinema)
                                        .subscribe((data:any)=>{
                                          this.villeService.dellet(v)
                                            .subscribe((data:any)=>{
                                              console.log(datacinema._embedded.cinemas.length);
                                              this.ongetvilles();
                                            },(err:any)=>{
                                            })
                                        },(err:any)=>{})
                                    },(err:any)=>{})
                                })
                            }
                          })
                      })
                      if(cinema.salles.length!=0){
                        if(dataprojection._embedded.projections.length==0){
                          this.villeService.dellet(salle)
                            .subscribe((data:any)=>{
                              this.villeService.dellet(cinema)
                                .subscribe((data:any)=>{
                                  this.villeService.dellet(v)
                                    .subscribe((data:any)=>{
                                      console.log(45);
                                      this.ongetvilles();
                                    },(err:any)=>{
                                    })
                                },(err:any)=>{})
                            },(err:any)=>{})
                        }
                      }
                    })
                  this.villeService.getResources(salle._links.places.href.replace("{?projection}","?projection=place"))
                    .subscribe((dataplace:any)=>{
                      dataplace._embedded.places.forEach((place:any)=>{
                        this.villeService.dellet(place)
                          .subscribe((data:any)=>{})
                      })
                    })
                })
               if(cinema.salles.length==0){
                  this.villeService.dellet(cinema)
                    .subscribe((data:any)=>{
                      this.villeService.dellet(v)
                        .subscribe((data:any)=>{
                          console.log(datacinema._embedded.cinemas.length+"25");
                          this.ongetvilles();
                        },(err:any)=>{
                        })
                    },(err:any)=>{})
                }
              })
          })
          if(datacinema._embedded.cinemas.length==0){
            this.villeService.dellet(v)
              .subscribe((data:any)=>{
                this.ongetvilles();
              },(err:any)=>{
              })
          }
        })
    }
  }

  /*ondeleteville(v: any) {
    let conf = confirm("Etes vous sûr?");
    this.villecurrent = v
    if(conf){
          console.log(this.villecurrent._links.cinemas.href.replace("{?projection}","?projection=cinema"));
          this.villeService.getResources(this.villecurrent._links.cinemas.href.replace("{?projection}","?projection=cinema"))
            .subscribe((datacine:any)=>{
              console.log(this.villecurrent.id);
              this
              while(datacine._embedded.cinemas!=null){
                console.log(c);
                if(c.ville.id==this.villecurrent.id){
                  console.log(c.ville.id+":id="+this.villecurrent.id);
                  this.villeService.getResources(c._links.salles.href.replace("{?projection}","?projection=salle"))
                    .subscribe((datasalle:any)=>{
                      for(let s of datasalle._embedded.salles){
                        console.log(s);
                        if(s.cinema.id==c.id){
                          console.log(s.cinema.id+":id="+c.id);
                          this.villeService.getResources(s._links.projections.href.replace("{?projection}","?projection=p1"))
                            .subscribe((dataprojection:any)=>{
                              for (let pr of dataprojection._embedded.projections){
                                if(pr.salle.id == s.id){
                                  this.villeService.getResources(pr._links.tickets.href.replace("{?projection}","?projection=ticketProjection"))
                                    .subscribe((dataticket:any)=>{
                                      for (let t of dataticket._embedded.tickets){
                                        if(t.projection.id== pr.id){
                                          this.villeService.dellet(t)
                                            .subscribe((data:any)=>{

                                            })
                                        }
                                      }
                                    })
                                  this.villeService.dellet(pr)
                                    .subscribe((data:any)=>{

                                    })
                                }
                              }
                            })
                          this.villeService.getResources(s._links.places.href.replace("{?projection}","?projection=place"))
                            .subscribe((dataplace:any)=>{
                              for (let pl of dataplace._embedded.places){
                                if(pl.salle.id = s.id){
                                  this.villeService.dellet(pl)
                                    .subscribe((data:any)=>{

                                    })
                                }
                              }
                            })
                          this.villeService.dellet(s)
                            .subscribe((data:any)=>{

                            })
                        }
                      }
                    },(err:any)=>{})
                  this.villeService.delletCinema(c)
                    .subscribe((data:any)=>{
                      console.log(c.id+":id="+this.villecurrent.id);
                    })
                }
              }
              this.villeService.dellet(v)
                .subscribe((data:any)=>{

                },(err:any)=>{
                  return console.log(err);
                })
              this.ongetvilles();
          },(err:any)=>{
              return console.log(err);
            })
         }
    }*/
 /* ondeleteville(v: any){
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.dellet(v)
        .subscribe((data:any)=>{
          this.ongetvilles();
        },(err:any)=>{
          return console.log(err);
        })
    }
  }*/

  onEditville(v: any) {
    let url = btoa(v._links.self.href);
    this.router.navigateByUrl("admin/edit-ville-admin/"+url);
  }

  onNewEntity() {
    if(this.code == 1){
      this.router.navigateByUrl("admin/new-ville-admin");
    }
  }

  onfdffilm() {
    this.villeService.getPDFfilm()
      .subscribe((data:any)=>{

      },(err:any)=>{
      })
  }
}
