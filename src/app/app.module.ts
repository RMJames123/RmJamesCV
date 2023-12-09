import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LoadscriptsService } from './servicios/loadscripts.service';

import {DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SkillComponent } from './skill/skill.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactoComponent } from './contacto/contacto.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {FormsModule} from '@angular/forms';


import { environment } from '../environments/environment';
import { PortafolioService } from '../app/servicios/portafolio.service';
import { LanguageService } from './servicios/language.service';
import { MenuitemService } from './servicios/menuitem.service';


@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    ExperienciaComponent,
    EducacionComponent,
    CapacitacionesComponent,
    TestimoniosComponent,
    NavbarComponent,
    PerfilComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    DataTablesModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '',component:AppComponent},
      {path: 'experiencia',component:ExperienciaComponent},
      {path: 'educacion',component:EducacionComponent},
      {path: 'skills',component:SkillComponent},
      {path: 'testimonios',component:TestimoniosComponent},
      {path: 'capacitaciones',component:CapacitacionesComponent},
      {path: '**',redirectTo:'/', pathMatch:'full'},        
      ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    LoadscriptsService,
    PortafolioService,
    LanguageService,
    MenuitemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

   }
