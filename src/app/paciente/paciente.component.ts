import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  selected: boolean=false;
  selectedPaciente!: Paciente; 
  pacientes: Array<Paciente> = [];


  constructor(private pacientesService: PacientesService) { }

  getPacientes() {
    this.pacientesService.getPacientes().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  numMenores(){
    let menores: number=0;
    let i: number=0;
    while(i<this.pacientes.length){
      if(this.pacientes[i].edad<18){
        menores++;
      }
      i++;
    }
    return menores;
  }

  onSelected(paciente: Paciente): void {
    this.selected = true;
    this.selectedPaciente = paciente;
  }

  ngOnInit() {
    this.getPacientes();
  }

}
