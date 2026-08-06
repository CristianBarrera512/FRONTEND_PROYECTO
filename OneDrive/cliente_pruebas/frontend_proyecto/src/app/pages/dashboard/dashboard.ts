import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  usuario: string='Administrador'
  rol:string='Administrador del sistema'

  /** Variable que simula las estadisticas mostradas en el dashboar */

  estradisitcas={
    ususarios:120,
    roles:8,
    cursos:24,
    aprendices:560
  };

  grafica=[ 
    {
      mes:'enero',
      valor:80
    },  
    {
      mes:'febrero',
      valor:45
    },    
    {
      mes:'marzon',
      valor:95
    },    
    {
      mes:'Abril',
      valor:70
    },    
    {
      mes:'Mayo',
      valor:60
    },
        {
      mes:'junio',
      valor:88
    },
  ];

  usuarios=[
    {
      id:1,
      nombre:'Juan Perez',
      correo:'juan@sena.edu.co',
      rol:'Instructor',
      estado:'Activo'
    },
    {
      id:2,
      nombre:'maria gomez',
      correo:'maria@sena.edu.co',
      rol:'Aprendiz',
      estado:'Activo'
    },
    {
      id:3,
      nombre:'carlos rodriguez',
      correo:'carlos@sena.edu.co',
      rol:'Adminisytrador',
      estado:'Activo'
      
    },
    {
      id:4,
      nombre:'Laura Sanchez',
      correo:'laura@sena.edu.co',
      rol:'Instritor',
      estado:'Inactivo'
    },
    {
      id:5,
      nombre:'Maria gomez',
      correo:'maria@sena.edu.con',
      rol:'Aprendiz',
      estado:'Activo'
    }
  ];

  constructor(){
    console.log("Dasboard cargado correctamente")
  }

  mostrarMensaje():void{
    alert('Bienvenido al Dashboard del sistema');
  }

  obtenerTotalUsuarios():number{
    return this.usuario.length;
  }
}
