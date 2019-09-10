
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComerciosComponent } from './components/comercios/comercios.component';
import { ComercioComponent } from './components/comercio/comercio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'comercios', component: ComerciosComponent },
  { path: 'comercio/:id', component: ComercioComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' } //Cuando no encuentra alguna ruta va directo a este lugar
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);