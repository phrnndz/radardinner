import { Component, OnInit } from '@angular/core';
import { ComerciosService,Comercio } from '../../services/comercios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})
export class ComerciosComponent implements OnInit {

  comercios:Comercio[] = [];

  constructor(private _comerciosService:ComerciosService, private _router:Router) { 
    // console.log("esto es el constructor de comercios component");
  }

  ngOnInit() {
    this.comercios = this._comerciosService.getComercios();
    // console.log(this.comercios);
  }

  verComercio(idx:number){
    this._router.navigate(['/comercio',idx])
  }

}
