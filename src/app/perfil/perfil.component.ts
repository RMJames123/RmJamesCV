import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: any[] = [];

  constructor( private datosPortafolio:PortafolioService ) { }

  ngOnInit(): void {
    this.datosPortafolio.CargarPerfil().subscribe( resp => {
    this.perfil = resp;
    })
  }

}
