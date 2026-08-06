import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-logis',
  imports: [FormsModule],
  templateUrl: './logis.html',
  styleUrl: './logis.css',
})


export class LogisComponent {


  //constructor para usar las rutas 
  constructor (private router:Router, private authService:AuthService){}


  //Variable para alamacenar correo
  email: string='';
  // Variable para almacenar contraseña 
  password: string='';
  // CONTRASEÑA QUEMADA PARA REALIZAR LA PRUEBA
  //metodo que sera ejecutado al precionar el boton de ingresar
  login(): void{
    const autenticado=this.authService.iniciarSesion(this.email,this.password);

    if(!autenticado){
      alert('correo o contraseña esta mal hijo de puta >:(')
      return;
    }
    const usuario=this.authService.obtenerUsuario();
      alert('bienvenido ${usuario?.nombre}\nrol:${usuario?.rol}')

      this.router.navigate(['/dashboard']);
    }
    
  goToRegister():void{
    this.router.navigate(['/register']);

  }

}
