import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: any[] = [];
  titskill: any[] = [];
  

  constructor( private datosFortafolio:PortafolioService ) { }

  ngOnInit(): void {
    this.datosFortafolio.CargarSkill().subscribe( resp => {
      this.skill = resp;
    });

    this.datosFortafolio.TituloSkill().subscribe( resp => {
      this.titskill = resp;
    });

  }

}
