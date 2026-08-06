import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logis',
  imports: [FormsModule],
  templateUrl: './logis.html',
  styleUrl: './logis.css',
})


export class LogisComponent {


  //constructor para usar las rutas 
  constructor (private router:Router){}

  //Variable para alamacenar correo
  email: string='';
  // Variable para almacenar contraseña 
  password: string='';
  // CONTRASEÑA QUEMADA PARA REALIZAR LA PRUEBA
  private readonly password_correcta: string="123456j"
  private readonly email_correcta: string="pera000890@gmail.com"
  //metodo que sera ejecutado al precionar el boton de ingresar
  login(): void{
    if ( this.email === this.email_correcta){

      console.log('correo;',this.email)

      if ( this.password === this.password_correcta){

      console.log('Password:',this.password);
  
      alert('los datos considen \n\n'+'la contraseña ingresada fue:'+ this.password+'\n\n el correo fue ingresada fue:'+ this.email)
      localStorage.setItem('usuarioLogeado','true')
      this.router.navigate(['/dashboard'])

      }else {
      alert('la contraseña no concide\n\n'+ 'La contraseña ingresada fue:'+ this.password)
      }
      }else{
      alert('el correo no concide\n\n'+'El email ingresada fue:'+ this.email)
      }
    }
    
  goToRegister():void{
    this.router.navigate(['/register']);

  }

}
