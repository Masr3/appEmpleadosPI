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
    addEmpleadoService(empleado:Empleado){

        this.alertService.muestraMensaje(`Nombre: ${empleado.nombre} ${empleado.apellido}\nCargo: ${empleado.cargo}\nSalario: ${empleado.salario}`)
        this.empleados.push(empleado);
    }

    findEmpleado(indice:number){
        let empleado:Empleado = this.empleados[indice];

        return empleado;
    }

    getUpdateEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado = this.empleados[indice]

        empleadoModificado.nombre = empleado.nombre
        empleadoModificado.apellido = empleado.apellido
        empleadoModificado.cargo = empleado.cargo
        empleadoModificado.salario = empleado.salario

    }

    getDeleteEmpleado(indice:number){
        this.empleados.splice(indice,1)
    }
}