export class Empleado{

    nombre:String ="";
    apellido:String= "";
    cargo:String="";
    salario:Number=0;


    constructor(nombre:String,apellido:String,cargo:String,salario:Number){
        this.nombre = nombre
        this.apellido = apellido
        this.cargo = cargo
        this.salario = salario

    }
}