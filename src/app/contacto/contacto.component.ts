import { HttpClient } from '@angular/common/http';
import { PortafolioService } from '../servicios/portafolio.service';

import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: any[] = [];
  titcontacto: any[] = [];

    constructor(private datosPortafolio:PortafolioService) {}
  

  ngOnInit(): void {

    this.datosPortafolio.CargarContacto().subscribe( resp => {
      this.contacto = resp;
      });

    this.datosPortafolio.TituloContacto().subscribe( resp => {
      this.titcontacto = resp;
      });

    }

    public sendEmail(e: Event) {
      e.preventDefault();
      emailjs.sendForm('SendEmailHot', 'template_erg8wvo', e.target as HTMLFormElement, 'P4lgFglXabNxfC758')
        .then((result: EmailJSResponseStatus) => {
          alert("Email enviado!!!");
        }, (error) => {
          alert(error.text);
        });
      
    }


}
