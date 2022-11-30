import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Empleado.model';
import { EmpleadosService } from '../Empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados';

  constructor(private servAgregarEmpleado:EmpleadosService) { 
    this.empleados = this.servAgregarEmpleado.empleados
  }
  ngOnInit(): void {
  }
  cuadroNombre:String = ""
  cuadroApellido:String = ""
  cuadroCargo:String = ""
  cuadroSalario:Number= 0;

  empleados:Empleado[] = [];



  validacion = this.validar()
  
  validar(){
    if(this.cuadroNombre =="" || this.cuadroApellido =="" || this.cuadroCargo== "" || this.cuadroSalario==0){
      return true
    } else{
      return false
    }
  }

  agregarEmpleado(){
    
    let miEmpleado:Empleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.servAgregarEmpleado.agregarEmpleadoServicio(miEmpleado);
  }


}
