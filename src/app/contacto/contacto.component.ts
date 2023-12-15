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
      const name = document.getElementById('name',) as HTMLInputElement | null;
      const email = document.getElementById('email',) as HTMLInputElement | null;
      const message = document.getElementById('message',) as HTMLInputElement | null;
      const form = document.getElementById('frmContacto',) as HTMLFormElement | null;
      var msgerror: string = "";
      var mailValido: boolean = false;
      var EMAIL_CHAR = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (name?.value === "")  {
        msgerror = "Ingrese un nombre";
      }

      if (msgerror === "") {
        if (email?.value === "")  {
          msgerror = "Ingrese un email";
        } 
        else {
          let strEmail = email?.value;
          if (strEmail?.match(EMAIL_CHAR)){
            
          }
          else {
            msgerror = "Email no válido"
          }
        }
      }

      if (msgerror === "") {
        if (message?.value === "")  {
          msgerror = "Ingrese un mensaje";
        } 
      }

      if (msgerror === "") {
      e.preventDefault();
      emailjs.sendForm('SendEmailHot', 'template_erg8wvo', e.target as HTMLFormElement, 'P4lgFglXabNxfC758')
        .then((result: EmailJSResponseStatus) => {
          alert("Email enviado!!!");
          form?.reset();
        }, (error) => {
          alert(error.text);
        });
      }
      else {
        alert(msgerror);
      }
    }


}
