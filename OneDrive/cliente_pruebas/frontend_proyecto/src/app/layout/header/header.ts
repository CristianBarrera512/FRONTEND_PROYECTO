import { Component, OnDestroy, OnInit, signal,} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent  implements OnInit, OnDestroy{
  constructor(private router:Router, private authService:AuthService){}
  nombreSistema:string='Sistema ADSO';
  descripcionSistema:string='Plataforma Academica para la gestion Institucional';
  usuario:string='';
  rol:string='';
  fechaactual=signal('');
  horaactual=signal('');

  private intervalo:any;

  ngOnInit(): void {
    this.usuario=this.authService.obtenernombre();
    this.rol=this.authService.obtenerRol();
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
    this.authService.cerrarSesion();
    this.router.navigate(['/login'])
    alert('Aqui se cerro sesion')
  }
   
}
