import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {CinemaService} from "./services/cinema.service";
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { EditfilmComponent } from './editfilm/editfilm.component';
import { AdminComponent } from './admin/admin.component';
import { EditVilleAdminComponent } from './edit-ville-admin/edit-ville-admin.component';
import { NewVilleAdminComponent } from './new-ville-admin/new-ville-admin.component';
import { LoginComponent } from './login/login.component';
import { VilleAdminComponent } from './admin/ville-admin/ville-admin.component';
import { CinemaAdminComponent } from './admin/cinema-admin/cinema-admin.component';
import { NewCinemaAdminComponent } from './new-cinema-admin/new-cinema-admin.component';
import { EditCinemaAdminComponent } from './edit-cinema-admin/edit-cinema-admin.component';
import { SallaAdminComponent } from './admin/salla-admin/salla-admin.component';
import { NewSallaAdminComponent } from './new-salla-admin/new-salla-admin.component';
import {SalleAdminService} from "./services/salle-admin.service";
import { EditSalleAdminComponent } from './edit-salle-admin/edit-salle-admin.component';
import { PlaceAdminComponent } from './admin/place-admin/place-admin.component';
import { ProjectionAdminComponent } from './admin/projection-admin/projection-admin.component';
import { TicketAdminComponent } from './admin/ticket-admin/ticket-admin.component';
import { EditTicketAdminComponent } from './edit-ticket-admin/edit-ticket-admin.component';
import { EditProjectionAdminComponent } from './edit-projection-admin/edit-projection-admin.component';
import { EditPlaceAdminComponent } from './edit-place-admin/edit-place-admin.component';
import { NewPlaceAdminComponent } from './new-place-admin/new-place-admin.component';
import { NewProjectionAdminComponent } from './new-projection-admin/new-projection-admin.component';
import { NewTicketAdminComponent } from './new-ticket-admin/new-ticket-admin.component';
import { AccueilleComponent } from './accueille/accueille.component';



@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    FilmDetailComponent,
    EditfilmComponent,
    AdminComponent,
    EditVilleAdminComponent,
    NewVilleAdminComponent,
    LoginComponent,
    VilleAdminComponent,
    CinemaAdminComponent,
    NewCinemaAdminComponent,
    EditCinemaAdminComponent,
    SallaAdminComponent,
    NewSallaAdminComponent,
    EditSalleAdminComponent,
    PlaceAdminComponent,
    ProjectionAdminComponent,
    TicketAdminComponent,
    EditTicketAdminComponent,
    EditProjectionAdminComponent,
    EditPlaceAdminComponent,
    NewPlaceAdminComponent,
    NewProjectionAdminComponent,
    NewTicketAdminComponent,
    AccueilleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CinemaService,
    LoginComponent,
    VilleAdminComponent,
    CinemaComponent,
    CinemaAdminComponent,
    SalleAdminService,
    SallaAdminComponent,
    ProjectionAdminComponent,
    PlaceAdminComponent,
    TicketAdminComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
