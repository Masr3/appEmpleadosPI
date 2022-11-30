import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../Empleados.service';
import { Empleado } from '../Empleado.model';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  
  titulo:string = "Proyectos" 


  constructor(private router:Router, private servAgregarEmpleado:EmpleadosService) { 
    this.empleados = this.servAgregarEmpleado.empleados
  }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([''])
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
    this.volverHome()
    let miEmpleado:Empleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.servAgregarEmpleado.agregarEmpleadoServicio(miEmpleado);
  }


}
