import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavbarComponent } from '../navbar/navbar.component';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

   Idioma: string = 'Español';

   constructor( private http: HttpClient,
      private dbPortfolio: AngularFireDatabase ) {

      }

CargarMenu():Observable<any>{

   return this.dbPortfolio.list('/Menu', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

   
}

  CargarPerfil():Observable<any>{

   return this.dbPortfolio.list('/Perfil', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

//    return this.dbPortfolio.list('Perfil').valueChanges();
//    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Perfil.json');
  }
 
   CargarSkill():Observable<any>{

      return this.dbPortfolio.list('/Skill', 
      ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

//    return this.dbPortfolio.list('Skill').valueChanges();
//    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Skill.json')
   }

   CargarExperiencia():Observable<any>{

   return this.dbPortfolio.list('/Experiencia', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

//    return this.dbPortfolio.list('Experiencia').valueChanges();
//    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Experiencia.json')
   }

   CargarEducacion():Observable<any>{

   return this.dbPortfolio.list('/Educacion', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

//    return this.dbPortfolio.list('Educacion').valueChanges();    
//    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Educacion.json')
   }

   CargarCapacitaciones():Observable<any>{

      return this.dbPortfolio.list('/Capacitaciones', 
      ref => this.Idioma ? ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

//    return this.dbPortfolio.list('Capacitaciones').valueChanges();
//    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Capacitaciones.json')
   }

   CargarTestimonios():Observable<any>{

      return this.dbPortfolio.list('/Testimonios', 
      ref => this.Idioma ? ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

//    return this.dbPortfolio.list('Testimonios').valueChanges();
//    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Testimonios.json')
   }
  

}


