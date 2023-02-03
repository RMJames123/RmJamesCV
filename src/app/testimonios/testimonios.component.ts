import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {

  testimonio: any[] = [];

  constructor( private datosPortafolio:PortafolioService ) { }

  ngOnInit(): void {
    this.datosPortafolio.CargarTestimonios().subscribe(resp => {
      this.testimonio = resp;
    })
  }

}
