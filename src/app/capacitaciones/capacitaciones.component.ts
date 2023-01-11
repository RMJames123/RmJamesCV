import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {

  capacitaciones: any[] = [];
  EmptyLeftT = true;

  constructor( private datosPortafolio:PortafolioService ) { }

  ngOnInit(): void {
    this.datosPortafolio.CargarCapacitaciones().subscribe( resp => {
    this.capacitaciones = resp;
    })
  }

  IsEmptyLeftT() {
    if (this.EmptyLeftT) {
      return true;
    } else {
      return false;
    }
  }

  SwEmptyLeftT() {
    this.EmptyLeftT = !this.EmptyLeftT;
    return false;
  }


}
