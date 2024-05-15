import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-pacienteDetail',
  templateUrl: './pacienteDetail.component.html',
  styleUrls: ['./pacienteDetail.component.css']
})
export class PacienteDetailComponent implements OnInit {

  @Input() pacienteDetail!: Paciente;
  
  constructor() { }

  ngOnInit() {
  }

}
