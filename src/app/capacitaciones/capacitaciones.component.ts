import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.css']
})
export class CapacitacionesComponent implements OnInit {

  capacitaciones: any[] = [];
  titcapacitaciones: any[] = [];

  EmptyLeftT = false;

  constructor( private datosPortafolio:PortafolioService,
    _config:NgbCarouselConfig ) { }

  ngOnInit(): void {
    this.datosPortafolio.CargarCapacitaciones().subscribe( resp => {
    this.capacitaciones = resp;
    });

    this.datosPortafolio.TituloCapacitaciones().subscribe( resp => {
      this.titcapacitaciones = resp;

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
