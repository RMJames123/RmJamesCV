import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: any[] = [];

  EmptyLeft = false;

  constructor( 
    private datosPortafolio:PortafolioService, _config:NgbCarouselConfig ) { }

  ngOnInit(): void {
    this.datosPortafolio.CargarExperiencia().subscribe(resp => {
      this.experiencia = resp;
    })
  }

  IsEmptyLeft() {
    if (this.EmptyLeft) {
      return true;
    } else {
      return false;
    }
  }

  SwEmptyLeft() {
    this.EmptyLeft = !this.EmptyLeft;
    return false;
  }
}
