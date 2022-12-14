import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados =  new EventEmitter<string>();

  constructor(private servEmpleado:ServicioEmpleadosService) { } 

  ngOnInit(): void {
  }

  AgregarCaracteristicas(value:string){
      
      this.servEmpleado.muestraMensaje(value)
      this.caracteristicasEmpleados.emit(value);
  }

}
