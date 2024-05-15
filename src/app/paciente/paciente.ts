export class Paciente {
    nombre: string;
    edad: number;
    diagnostico: string;
    // No vale la pena hacer el historial

    constructor(nombre: string, edad: number, diagnostico: string){
        this.nombre=nombre;
        this.edad=edad;
        this.diagnostico=diagnostico;
    }
}
