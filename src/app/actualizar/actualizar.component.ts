import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../Empleados.service';
import { Empleado } from '../Empleado.model';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
})
export class ActualizarComponent implements OnInit {
  titulo: string = 'Modificar empleados';

  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private servAgregarEmpleado: EmpleadosService
  ) {
    this.empleados = this.servAgregarEmpleado.empleados;
  }

  accionRealizada:string

  accion: number;

  ngOnInit(): void {
    this.accion = parseInt(this.rutaActiva.snapshot.queryParams['accion']);

    this.indice = this.rutaActiva.snapshot.params['id'];

    let empleado: Empleado = this.servAgregarEmpleado.findEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }

  cuadroNombre: String = '';
  cuadroApellido: String = '';
  cuadroCargo: String = '';
  cuadroSalario: Number = 0;
  indice: number;

  empleados: Empleado[] = [];

  validacion = this.validar();

  validar() {
    if (
      this.cuadroNombre == '' ||
      this.cuadroApellido == '' ||
      this.cuadroCargo == '' ||
      this.cuadroSalario == 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  updateEmpleado() {
    if (this.accion == 1) {
      let miEmpleado: Empleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );
      this.servAgregarEmpleado.getUpdateEmpleado(this.indice, miEmpleado);
    } else {
      this.servAgregarEmpleado.getDeleteEmpleado(this.indice);
    }
    this.volverHome()
  }

  edit(){
    if(this.accion==1){
      this.accionRealizada = "Actualizar"
      return "btn btn-primary"
    } else{
      this.accionRealizada = "Eliminar"
      return "btn btn-danger"
    } 
  }

  // deleteEmpleado(){
  //   this.volverHome()
  //   this.servAgregarEmpleado.getDeleteEmpleado(this.indice)
  // }
}
