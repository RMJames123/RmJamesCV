import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
   
    testimonios: any[] = [];

  constructor( private http: HttpClient ) {}

  CargarPerfil():Observable<any>{
    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Perfil.json')
  }
   CargarSkill():Observable<any>{
    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Skill.json')
   }

   CargarExperiencia():Observable<any>{
    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Experiencia.json')
   }

   CargarEducacion():Observable<any>{
    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Educacion.json')
   }

   CargarCapacitaciones():Observable<any>{
    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Capacitaciones.json')
   }

   CargarTestimonios():Observable<any>{
    return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Testimonios.json')
   }
}
