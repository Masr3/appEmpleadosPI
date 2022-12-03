import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./Empleado.model";

@Injectable()
export class DataService{
    
    constructor(private httpClient:HttpClient){

    }


    cargarEmpleados(){

        return this.httpClient.get('https://gestionempleados-f3c07-default-rtdb.firebaseio.com/datos.json');
    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://gestionempleados-f3c07-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            response => console.log("Se ha guardado el empleado: "+ response),
            error => console.log("Error: "+error),
            

        );
    }
    updateEmpleado(indice:number, empleado:Empleado){
        let url = 'https://gestionempleados-f3c07-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url,empleado).subscribe(

            response => console.log("Se ha modificado el empleado: "+ response),
            error => console.log("Error: "+error),
            

        );
    }
    delEmpleado(indice:number){
        let url = 'https://gestionempleados-f3c07-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(

            response => console.log("Se ha eliminado el empleado: "+ response),
            error => console.log("Error: "+error),
            

        );
    }
}