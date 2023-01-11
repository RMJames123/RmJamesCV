import { Component, OnInit } from '@angular/core';
import { LoadscriptsService } from './../servicios/loadscripts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( _CargaScripts:LoadscriptsService ) { 
    _CargaScripts.Carga(["toggleMenu"]);
  }

  ngOnInit(): void {
  }

}
