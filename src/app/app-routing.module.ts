import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CinemaComponent} from './cinema/cinema.component';
import {FilmDetailComponent} from "./film-detail/film-detail.component";
import {EditfilmComponent} from "./editfilm/editfilm.component";
import {AdminComponent} from "./admin/admin.component";
import {EditVilleAdminComponent} from "./edit-ville-admin/edit-ville-admin.component";
import {NewVilleAdminComponent} from "./new-ville-admin/new-ville-admin.component";
import {LoginComponent} from "./login/login.component";
import {CinemaAdminComponent} from "./admin/cinema-admin/cinema-admin.component";
import {NewCinemaAdminComponent} from "./new-cinema-admin/new-cinema-admin.component";
import {EditCinemaAdminComponent} from "./edit-cinema-admin/edit-cinema-admin.component";
import {EditSalleAdminComponent} from "./edit-salle-admin/edit-salle-admin.component";
import {NewSallaAdminComponent} from "./new-salla-admin/new-salla-admin.component";
import {NewProjectionAdminComponent} from "./new-projection-admin/new-projection-admin.component";
import {NewPlaceAdminComponent} from "./new-place-admin/new-place-admin.component";
import {NewTicketAdminComponent} from "./new-ticket-admin/new-ticket-admin.component";
import {EditProjectionAdminComponent} from "./edit-projection-admin/edit-projection-admin.component";
import {EditPlaceAdminComponent} from "./edit-place-admin/edit-place-admin.component";
import {EditTicketAdminComponent} from "./edit-ticket-admin/edit-ticket-admin.component";
import {AccueilleComponent} from "./accueille/accueille.component";
import {VilleAdminComponent} from "./admin/ville-admin/ville-admin.component";
import {ProjectionAdminComponent} from "./admin/projection-admin/projection-admin.component";
import {PlaceAdminComponent} from "./admin/place-admin/place-admin.component";
import {TicketAdminComponent} from "./admin/ticket-admin/ticket-admin.component";
import {SallaAdminComponent} from "./admin/salla-admin/salla-admin.component";

const routes: Routes = [
  {path: 'accueille', component: AccueilleComponent,
       children:[{path: 'cinema', component: CinemaComponent },
         {path: 'film-detail/:url', component: FilmDetailComponent},
         {path: 'film-edit/:url', component: EditfilmComponent},
       ]},
  {path:"",redirectTo:"accueille",pathMatch:"full"},
  {path: 'admin', component: AdminComponent,children:[
      {path:"ville-admin", component:VilleAdminComponent},
      {path:"cinema-admin", component:CinemaAdminComponent},
      {path:"projection-admin", component:ProjectionAdminComponent},
      {path:"place-admin", component:PlaceAdminComponent},
      {path:"ticket-admin", component:TicketAdminComponent},
      {path:"place-admin", component:PlaceAdminComponent},
      {path:"salle-admin", component:SallaAdminComponent},
      {path: 'edit-ville-admin/:url', component: EditVilleAdminComponent},
      {path: 'new-ville-admin', component: NewVilleAdminComponent},
      {path:'new-cinema-admin', component: NewCinemaAdminComponent},
      {path:'edit-cinema-admin/:url', component: EditCinemaAdminComponent},
      {path:'edit-salle-admin/:url', component: EditSalleAdminComponent},
      {path:'new-salle-admin', component: NewSallaAdminComponent},
      {path:'new-projection-admin', component: NewProjectionAdminComponent},
      {path:'new-place-admin', component: NewPlaceAdminComponent},
      {path:'new-ticket-admin', component: NewTicketAdminComponent},
      {path:'edit-projection-admin/:url', component: EditProjectionAdminComponent},
      {path:'edit-place-admin/:url', component: EditPlaceAdminComponent},
      {path:'edit-ticket-admin/:url', component: EditTicketAdminComponent},
    ]},
  {path:"login", component:LoginComponent},
  {path:"verify/:token", component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
