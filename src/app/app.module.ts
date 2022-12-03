import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './Empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  
    {path:'', component:HomeComponentComponent},
    {path:'proyectos', component:ProyectosComponentComponent},
    {path:'about', component:QuienessomosComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'actualizar/:id', component:ActualizarComponent},
    {path:'**', component:NotFoundComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienessomosComponent,
    ContactoComponent,
    ActualizarComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService,EmpleadosService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
