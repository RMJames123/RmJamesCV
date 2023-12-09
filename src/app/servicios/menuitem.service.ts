import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  MenuOpciones: any[] = [];

  constructor() { }

  selecciona_opcion( boton:string ): any {


    return this.MenuOpciones.find(x => x.Boton = boton );

  }


}
