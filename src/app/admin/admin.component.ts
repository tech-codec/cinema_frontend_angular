import {Component, ElementRef, OnInit} from '@angular/core';
import {VilleAdminService} from "../services/ville-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {VilleAdminComponent} from "./ville-admin/ville-admin.component";
import {CinemaAdminComponent} from "./cinema-admin/cinema-admin.component";
import {SallaAdminComponent} from "./salla-admin/salla-admin.component";
import {PlaceAdminComponent} from "./place-admin/place-admin.component";
import {ProjectionAdminComponent} from "./projection-admin/projection-admin.component";
import {TicketAdminComponent} from "./ticket-admin/ticket-admin.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class AdminComponent implements OnInit {
  /*Entite!: any;
  size: number = 2;
  currentpage: number = 0;
  totalPages!: number;
  currentmc:string="";
  code:number = 0;
  public pages!: Array<number>;*/

  width:number = window.innerWidth;
  height:number = window.innerHeight;
  test : Date = new Date();

  private toggleButton: any;
  private sidebarVisible: boolean;

  code:number = 1;

  constructor(private villeService: VilleAdminService, private route: ActivatedRoute,
              private router: Router,public villeAdmin: VilleAdminComponent,
              private cinemaAdmin: CinemaAdminComponent,private salleAdmin:SallaAdminComponent,
              private placeAdmin:PlaceAdminComponent, private projectionAdmin:ProjectionAdminComponent,
              private ticketAdmin:TicketAdminComponent, private element: ElementRef) { this.sidebarVisible = false;}

  ngOnInit(): void {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }

  /*ongetvilles() {
    this.size = 2;
    this.code=1;
    this.villeService.getVillePage(this.currentmc,this.currentpage, this.size)
      .subscribe((data:any)=>{
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.Entite = data;
        console.log(this.Entite);
      },(err:any)=>{
        console.log(err);
      })
  }*



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

  ondeleteville(v: any) {
    console.log(v);
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.villeService.dellet(v)
        .subscribe((data:any)=>{
          this.ongetvilles();
        },(err:any)=>{
          return console.log(err);
        })
    }

  }

  onEditville(v: any) {
    let url = btoa(v._links.self.href);
    this.router.navigateByUrl("edit-ville-admin/"+url);
  }

  onNewEntity() {
    if(this.code == 1){
      this.router.navigateByUrl("new-ville-admin");
    }
  }*/

  ongetvilles() {
    this.villeAdmin.ongetvilles();
    this.code=this.villeAdmin.code;
    this.router.navigateByUrl("/admin/ville-admin");
    console.log(this.villeAdmin.Entite);
  }

  ongetCinemas() {
    this.cinemaAdmin.ongetCinemas();
    this.code= this.cinemaAdmin.code;
    this.router.navigateByUrl("/admin/cinema-admin");
    console.log(this.cinemaAdmin.Entite);
  }
  ongetSalles(){
    this.salleAdmin.ongetSalles();
    this.code= this.salleAdmin.code;
    this.router.navigateByUrl("/admin/salle-admin");
    console.log(this.cinemaAdmin.Entite);
  }

  ongetPlaces() {
    this.placeAdmin.ongetPlaces();
    this.code= this.placeAdmin.code;
    this.router.navigateByUrl("/admin/place-admin");
    console.log(this.cinemaAdmin.Entite);
  }

  ongetProjections() {
    this.projectionAdmin.ongetProjections();
    this.code= this.projectionAdmin.code
    this.router.navigateByUrl("/admin/projection-admin");
    console.log(this.cinemaAdmin.Entite);
  }

  ongetTickets() {
    this.ticketAdmin.ongetTickets();
    this.code= this.ticketAdmin.code;
    this.router.navigateByUrl("/admin/ticket-admin");
    console.log(this.cinemaAdmin.Entite);
  }


  /************************************************************/

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  isMobileMenu() {
    if (this.width> 991) {
      return false;
    }
    return true;
  };


  onWindowResize(event:any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }

  /*getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
      if(this.listTitles[item].path === titlee){
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }*/
}


