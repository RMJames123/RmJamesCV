import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

   Idioma: string = this.LangService.sIdioma;

   constructor( private http: HttpClient,
      private dbPortfolio: AngularFireDatabase,
      private LangService: LanguageService ) {

      }

CargarIdiomas():Observable<any>{

   return this.http.get('https://rm-portafolio-default-rtdb.firebaseio.com/Idiomas.json');
 

}

CargarMenu():Observable<any>{

   return this.dbPortfolio.list('/Menu', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

   
}

  CargarPerfil():Observable<any>{

   return this.dbPortfolio.list('/Perfil', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

  }
 
   CargarSkill():Observable<any>{

      return this.dbPortfolio.list('/Skill', 
      ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

   }

   TituloSkill():Observable<any>{

      var strBtn = new String("#skills_");
      var strLang = new String(this.Idioma);
      var strBtnLang = strBtn.concat(strLang.toString())

      return this.dbPortfolio.list('/Menu', 
      ref => strBtnLang ?  ref.orderByChild('BtnLang').equalTo(strBtnLang) : ref ).valueChanges();

   }


   CargarExperiencia():Observable<any>{

   return this.dbPortfolio.list('/Experiencia', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();
   }

   TituloExperiencia():Observable<any>{

      var strBtn = new String("#experience_");
      var strLang = new String(this.Idioma);
      var strBtnLang = strBtn.concat(strLang.toString())

      return this.dbPortfolio.list('/Menu', 
      ref => strBtnLang ?  ref.orderByChild('BtnLang').equalTo(strBtnLang) : ref ).valueChanges();

   }

   CargarEducacion():Observable<any>{

   return this.dbPortfolio.list('/Educacion', 
   ref => this.Idioma ?  ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

   }

   CargarCapacitaciones():Observable<any>{

      return this.dbPortfolio.list('/Capacitaciones', 
      ref => this.Idioma ? ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

   }

   TituloCapacitaciones():Observable<any>{

      var strBtn = new String("#trainings_");
      var strLang = new String(this.Idioma);
      var strBtnLang = strBtn.concat(strLang.toString())

      return this.dbPortfolio.list('/Menu', 
      ref => strBtnLang ?  ref.orderByChild('BtnLang').equalTo(strBtnLang) : ref ).valueChanges();

   }


   CargarTestimonios():Observable<any>{

      return this.dbPortfolio.list('/Testimonios', 
      ref => this.Idioma ? ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

   }

   TituloTestimonios():Observable<any>{

      var strBtn = new String("#testimonials_");
      var strLang = new String(this.Idioma);
      var strBtnLang = strBtn.concat(strLang.toString())

      return this.dbPortfolio.list('/Menu', 
      ref => strBtnLang ?  ref.orderByChild('BtnLang').equalTo(strBtnLang) : ref ).valueChanges();

   }

   CargarContacto():Observable<any>{

      return this.dbPortfolio.list('/Contacto', 
      ref => this.Idioma ? ref.orderByChild('Idioma').equalTo(this.Idioma) : ref ).valueChanges();

   }

   TituloContacto():Observable<any>{

      var strBtn = new String("#contact_");
      var strLang = new String(this.Idioma);
      var strBtnLang = strBtn.concat(strLang.toString())

      return this.dbPortfolio.list('/Menu', 
      ref => strBtnLang ?  ref.orderByChild('BtnLang').equalTo(strBtnLang) : ref ).valueChanges();

   }

}
