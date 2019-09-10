import { Injectable } from '@angular/core';

@Injectable()
export class ComerciosService{


    private comercios:Comercio[]=
    [
        {
          nombre: "Tacos sin Filtro",
          bio: "Tacos al pastor, tacos de cabeza, tacos de tasajo",
          img: "assets/img/1.jpg",
          ubicacion: "Rio verde #318, Fraccionamiento los Ríos. ",
          mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8100080238623!2d-96.70389688512792!3d17.081943588262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723925cdaf551%3A0x4291780716984d92!2sTacos%20Sin%20Filtro!5e0!3m2!1ses!2smx!4v1567624100202!5m2!1ses!2smx"
        },
        {
          nombre: "Tacos de Lechón Tacuchito",
          bio: "Donde encontrarás #Tacos, #Tostadas, y #Tortas de lechon con chicharron & Tasajo. 🌮🌮🌮😍",
          img: "assets/img/2.jpg",
          ubicacion: "Calle 3 No. 319, Col. Fovisste El Rosario.",
          mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8100080238623!2d-96.70389688512792!3d17.081943588262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723925cdaf551%3A0x4291780716984d92!2sTacos%20Sin%20Filtro!5e0!3m2!1ses!2smx!4v1567624100202!5m2!1ses!2smx"
        },
        {
          nombre: "La Tradicional",
          bio: "La vitamina T en todo su esplendor, Tortas, Tlayudas, Tacos y Tostadas, con el mejor Toque TRADICIONAL, que Oaxaca puede dar !Esto está para chuparse los dedos! 🤤",
          img: "assets/img/3.jpg",
          ubicacion: "Avenida Lázaro Cárdenas ( caminó nacional ) #403, Entre norte 4 y norte 5 ,Col Victor bravo ahuja , Santa Lucía del cambio Oaxaca",
          mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8100080238623!2d-96.70389688512792!3d17.081943588262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723925cdaf551%3A0x4291780716984d92!2sTacos%20Sin%20Filtro!5e0!3m2!1ses!2smx!4v1567624100202!5m2!1ses!2smx"
        },
        {
          nombre: "Río de Janeiro",
          bio: "Todo esta comida la encontrarás en el buffet brasileño de Río de Janeiro así que ya sabes, a comer por qué vida solo hay una 😋😉",
          img: "assets/img/4.jpg",
          ubicacion: "Calzada Porfirio Díaz 187, Reforma, 68050 Oaxaca de Juárez, Oax",
          mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8100080238623!2d-96.70389688512792!3d17.081943588262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723925cdaf551%3A0x4291780716984d92!2sTacos%20Sin%20Filtro!5e0!3m2!1ses!2smx!4v1567624100202!5m2!1ses!2smx"
        },
        {
          nombre: "La Cevicheria Oaxaca",
          bio: "Todos los olores, sabores y sazón característico de nuestra tierra Oaxaqueña, la podrás disfrutar mezclada con lo que frescura y esquisites de los mariscos en La Cevicheria Oaxaca Un lugar para quitarse esa cruda que tanto nos afecta😅 😉",
          img: "assets/img/5.jpg",
          ubicacion: "Eucaliptos #108, Col. Reforma",
          mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8100080238623!2d-96.70389688512792!3d17.081943588262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723925cdaf551%3A0x4291780716984d92!2sTacos%20Sin%20Filtro!5e0!3m2!1ses!2smx!4v1567624100202!5m2!1ses!2smx"
        },
        {
          nombre: "Restaurante familiar marisqueria La Casita de Adobe ",
          bio: "Amigos les tenemos una recomendación muy especial, el lugar se encuentra rumbo a zimatlan pero estamos seguros que les encantará, excelente servicio, lugar muy acogedor, un poco escondido pero con un sabor increíble y a un súper precio.",
          img: "assets/img/6.jpg",
          ubicacion: "Zimatlán de Álvarez",
          mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.8100080238623!2d-96.70389688512792!3d17.081943588262337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723925cdaf551%3A0x4291780716984d92!2sTacos%20Sin%20Filtro!5e0!3m2!1ses!2smx!4v1567624100202!5m2!1ses!2smx"
        },
       
      ];

    constructor(){
        console.log("Service ready");
    }


    getComercios():Comercio[]{
        return this.comercios
    }

    getComercio(idx:string){
      return this.comercios[idx];
    }

    buscarComercio(termino:string):Comercio[]{
      let comercioArr:Comercio[]=[];
      termino =termino.toLowerCase();

      for (let i=0; i< this.comercios.length; i++){
        let comercio = this.comercios[i];
        let nombre = comercio.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0){
          comercio.idx=i;
          comercioArr.push(comercio)
        }
      }
      return comercioArr;
    }


}

export interface Comercio {
    nombre:string,
    bio:string,
    img:string,
    ubicacion:string,
    mapa:string,
    idx?:number
}

