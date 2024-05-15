import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './paciente.component';
import { PacienteDetailComponent } from './pacienteDetail/pacienteDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PacienteComponent, PacienteDetailComponent],
  exports: [PacienteComponent]
})
export class PacienteModule { }
