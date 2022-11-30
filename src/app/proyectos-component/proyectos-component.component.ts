import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../Empleados.service';
import { Empleado } from '../Empleado.model';
@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

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
