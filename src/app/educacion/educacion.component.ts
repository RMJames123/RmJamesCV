import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: any[] = [];

  constructor( private datosPortafolio:PortafolioService ) { }

  ngOnInit(): void {
    this.datosPortafolio.CargarEducacion().subscribe(resp => {
      this.educacion = resp;
    })
  }

}
