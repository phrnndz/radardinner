import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import {APP_ROUTING } from './app.routes'

// Servicios
import { ComerciosService } from './services/comercios.service'


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComerciosComponent } from './components/comercios/comercios.component';
import { ComercioComponent } from './components/comercio/comercio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ComercioTarjetaComponent } from './components/comercio-tarjeta/comercio-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ComerciosComponent,
    ComercioComponent,
    BuscadorComponent,
    ComercioTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    
  ],
  providers: [ //aqui van todos los servicios
    ComerciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
