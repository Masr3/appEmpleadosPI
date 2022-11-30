import { Injectable } from "@angular/core";
import { Empleado } from "./Empleado.model"
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private alertService:ServicioEmpleadosService){

    }



    empleados:Empleado[] = [
        new Empleado("Manuel", "Santana","Presidente",10000),
        new Empleado("Juan", "Lopez","Director",7500),
        new Empleado("Pedro", "Martinez","Jefe de Seccion",5000),
        new Empleado("Maria", "Rodriguez","Administrativo",4000)
    
      ]
    agregarEmpleadoServicio(empleado:Empleado){

        this.alertService.muestraMensaje(`Nombre: ${empleado.nombre} ${empleado.apellido}\nCargo: ${empleado.cargo}\nSalario: ${empleado.salario}`)
        this.empleados.push(empleado);
    }
}