import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  sKey:string ='sLang';
  sIdioma:any = 'Spanish';

  constructor() { 

    if(localStorage.getItem( this.sKey) == undefined) {

      this.grabar_language( this.sIdioma );

    }
    else {
      this.leer_language();
    }
  }

grabar_language( sIdioma:string ):void {

  this.sIdioma = sIdioma;
  localStorage.setItem( this.sKey, this.sIdioma );

} 

leer_language() {

  this.sIdioma = localStorage.getItem( this.sKey );

 
} 


}
