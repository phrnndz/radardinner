import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComerciosService } from '../../services/comercios.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  comerciosBuscados:any[] =[];
  termino:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private _comercioServicio:ComerciosService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
      this.termino = params['termino'];
      this.comerciosBuscados= this._comercioServicio.buscarComercio(params['termino']);
      console.log(this.comerciosBuscados);
      
    })
  }

}
