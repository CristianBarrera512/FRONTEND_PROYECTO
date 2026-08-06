import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  usuario: string='administrador'
  rol: string='Administrador del sistema'



  // Variable que simula los datos del dashborad
  estadisticas={
    usuarios:120,
    roles:8,
    cursos:24,
    prendices:560
  };
// json con arreglo
  grafica=[
    {
      mes:'Enero',
      valor:80,
    },
    {
      mes:'Febrero',
      valor:45,
    },
    {
      mes:'Marzo',
      valor:95,
    },
    {
      mes:'Abril',
      valor:70
    },
    {
      mes:'Mayo',
      valor:60,
    },
    {
      mes:'Junio',
      valor:88,
    }
  ];

  usuarios=[
    {
      id:1,
      nombre:'Juan Perez',
      correo:'juanp@gmail.com',
      rol:'Instructor',
      estado:'activo'
    },
    {
      id:2,
      nombre:'Maria Gomez',
      correo:'maria@sena.edu.co',
      rol:'Aprendiz',
      estado:'Activo'
    },
    {
      id:3,
      nombre:'Carlos Rodriguez',
      correo:'carlosR@sena.edu.co',
      rol:'Administrador',
      estado:'Activo'
    },
    {
      id:4,
      nombre:'Laura Sanchez',
      correo:'lauraS@sena.edu.co',
      rol:'Instructor',
      estado:'Inactiva'
    },
    {
      id:5,
      nombre:'Andres Torres',
      correo:'Andres@sena.edu.co',
      rol:'Aprendiz',
      estado:'Activo'
    }

  ];

  constructor(){
    console.log("Dashborad cargado correctamente")
  }

  // metodo para mostrar mensaje

  mostrarMensaje():void{
    alert('bienvenido al Dashboard del sistema');
  }

  // metodo nuevo para obtener todos los usuarios

  obtenerTotalUsuarios():number{
    return this.usuarios.length;
  }
}
