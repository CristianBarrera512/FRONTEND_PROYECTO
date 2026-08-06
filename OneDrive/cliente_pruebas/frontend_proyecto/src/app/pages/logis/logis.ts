import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface UsuarioSistema{
  nombre:string;
  correo:string;
  password:string;
  rol:string;
}

@Component({
  selector: 'app-logis',
  imports: [FormsModule],
  templateUrl: './logis.html',
  styleUrl: './logis.css',
})


export class LogisComponent {


  //constructor para usar las rutas 
  constructor (private router:Router){}

  usuariosSistema:UsuarioSistema[]=[
    {
      nombre:'Administrador',
      correo:'admin@sena.edu.com',
      password:'123456',
      rol:'Administrador'
    },
        {
      nombre:'Fabian Instructor',
      correo:'instrucotr@sena.edu.com',
      password:'123456',
      rol:'Instrucotr'
    },
    {
      nombre:'Aprendiz',
      correo:'Aprendiz@sena.edu.com',
      password:'123456',
      rol:'Aprendiz'
    }
  ]

  //Variable para alamacenar correo
  email: string='';
  // Variable para almacenar contraseña 
  password: string='';
  // CONTRASEÑA QUEMADA PARA REALIZAR LA PRUEBA
  private readonly password_correcta: string="123456j"
  private readonly email_correcta: string="pera000890@gmail.com"
  //metodo que sera ejecutado al precionar el boton de ingresar
  login(): void{
      const usuario=this.usuariosSistema.find(
        u=>u.correo===this.email
      );
      if(!usuario){
        alert('el correo no existe')
        return;
      }
      if (usuario.password!==this.password){
        alert('no es la contraseña')
      }
      localStorage.setItem('usuarioLogeado','true');
      localStorage.setItem('rol',usuario.rol);
      localStorage.setItem('correo',usuario.correo);
      localStorage.setItem('nombre',usuario.nombre)

      alert('bienvenido' + usuario.nombre+ '\nRol' + usuario.rol)
      this.router.navigate(['/dashboard']);
    }
    
  goToRegister():void{
    this.router.navigate(['/register']);

  }

}
