import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComerciosService } from '../../services/comercios.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent  {

  comercio:any =  {};
  mapaComercio:any;

  constructor(private _activatedRoute:ActivatedRoute, 
              private _comerciosService:ComerciosService,
              public sanitizer: DomSanitizer
  ){ 
    this._activatedRoute.params.subscribe(params =>{
      // console.log(params['id']); // El param a obtener es el mismo que se puso en las rutas
      this.comercio = this._comerciosService.getComercio(params['id']);
      this.mapaComercio = this.sanitizer.bypassSecurityTrustResourceUrl(this.comercio.mapa+'&output=embed');
    })
  }






}
