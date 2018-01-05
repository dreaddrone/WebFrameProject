import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AgmCoreModule} from '@agm/core'
import { VeloMapComponent } from './jonas/veloMap/veloMap.component';
import { VeloService } from './services/velo.service';
import { HttpClientModule } from '@angular/common/http';
import { CarpoolComponent } from './carpool/carpool.component';
import { CarpoolService } from './services/carpool.service';
<<<<<<< HEAD
import { TariefComponent } from './tarief/tarief.component';
import { TariefService } from './services/parkeertarief.service';

=======
import { VeloComponent } from './jonas/velo.component';
import { VeloDataComponent } from './jonas/veloData/veloData.component';
import { WeatherComponent } from './jonas/weather/weather.component';
import { WeatherService } from './services/weather.service';
>>>>>>> cea561212fa13ed958eaa1a65421d2b1233d5c76

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    VeloMapComponent,
    CarpoolComponent,
    VeloDataComponent,
    VeloMapComponent,
    VeloComponent,
<<<<<<< HEAD
    CarpoolComponent,
    TariefComponent
    
=======
    WeatherComponent 
>>>>>>> cea561212fa13ed958eaa1a65421d2b1233d5c76
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path : "", redirectTo: "404", pathMatch: "full"},
      {path: "404", component: PageNotFoundComponent},
      {path: "home", component : HomeComponent},
      {path: "carpool", component : CarpoolComponent},
      {path: "velo", component: VeloComponent}
    ], {useHash:true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiKlnD4BuX5sIWdAb0VYxZIs4-W6EEQdI'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    VeloService,
    CarpoolService,
<<<<<<< HEAD
    TariefService
=======
    WeatherService
>>>>>>> cea561212fa13ed958eaa1a65421d2b1233d5c76
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
