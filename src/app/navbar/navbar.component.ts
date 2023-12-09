import { Component, OnInit} from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';
import { LoadscriptsService } from './../servicios/loadscripts.service';
import { LanguageService } from '../servicios/language.service';
import { MenuitemService } from '../servicios/menuitem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {

selectedIdioma = this.LangServ.sIdioma;

mimenu: any[] = [];
lstidiomas: any[] = [];

  constructor( _CargaScripts:LoadscriptsService,
    private datosPortafolio:PortafolioService,
    private LangServ:LanguageService ) { 
    _CargaScripts.Carga(["toggleMenu"]);
  }

  ngOnInit(): void {

    this.datosPortafolio.CargarIdiomas().subscribe( resp => {
      this.lstidiomas = resp;
      })

      this.datosPortafolio.CargarMenu().subscribe( resp => {
      this.mimenu = resp;
  
    });

    
    }

  salvar_Idioma( sIdioma: string ){

this.LangServ.grabar_language(sIdioma );

window.location.reload();


  }

} 
