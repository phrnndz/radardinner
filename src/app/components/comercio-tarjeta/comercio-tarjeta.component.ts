import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comercio-tarjeta',
  templateUrl: './comercio-tarjeta.component.html',
  styleUrls: ['./comercio-tarjeta.component.css']
})
export class ComercioTarjetaComponent implements OnInit {

  @Input() comercio: any={};
  @Input() index:number;

  @Output() comercioSeleccionado:EventEmitter<number>;

  constructor(private _router:Router) {
    this.comercioSeleccionado = new EventEmitter();
   }

  ngOnInit(){

  }

  verComercio(){
    // this.comercioSeleccionado.emit(this.index);
    this._router.navigate(['/comercio',this.index])
  }
}
