import { Component, OnInit} from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';
import { LoadscriptsService } from './../servicios/loadscripts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {

selectedIdioma = 'Español';

mimenu: any[] = [];

  constructor( _CargaScripts:LoadscriptsService,
    private datosPortafolio:PortafolioService ) { 
    _CargaScripts.Carga(["toggleMenu"]);
  }

  OnInit(): void {

    this.datosPortafolio.CargarMenu().subscribe( resp => {
      this.mimenu = resp;
    })
  
  }

} 
