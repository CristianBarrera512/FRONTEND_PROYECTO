import { Component, OnDestroy, OnInit, signal,} from '@angular/core';
import { DatePipe } from '@angular/common';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent  implements OnInit, OnDestroy{
  constructor(private router:Router){}
  nombreSistema:string='Sistema ADSO';
  descripcionSistema:string='Plataforma Academica para la gestion Institucional';
  usuario:string='Administrador';
  rol:string='Administrador del sistema';
  fechaactual=signal('');
  horaactual=signal('');

  private intervalo:any;

  ngOnInit(): void {
    this.actulizarFechaHora();
    this.intervalo=setInterval(()=>{
      this.actulizarFechaHora();
    },1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

    actulizarFechaHora():void{
    const ahora=new Date();
    this.fechaactual.set(ahora.toLocaleDateString(
      'es-CO',
      {
        weekday:'long',
        day:'2-digit',
        month:'long',
        year:'numeric'
      }
    ));
    this.horaactual.set(ahora.toLocaleTimeString(
      'es-CO',
      {
        hour12:true
      } 
    ));
  }

  cerrarSesion():void{
    localStorage.removeItem('usuarioLogeado')
    this.router.navigate(['/login'])
    alert('Aqui se cerro sesion')
  }
   
}
