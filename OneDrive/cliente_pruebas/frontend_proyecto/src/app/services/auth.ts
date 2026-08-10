import { Injectable } from '@angular/core';
import { UsuarioAuth } from '../models/usuario-auth';
import { core } from '@angular/compiler';


interface UsuarioSistema extends UsuarioAuth{
    password:string; 
}

@Injectable({
    providedIn:'root'
   
})
export class AuthService { 
    private readonly STORAGE_KEY='usuarioSesion';
    
    private usuariosSistema:UsuarioSistema[]=[
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

    constructor(){}
    // metodo para guardar la informacion del usuario
    iniciarSesion(correo:string,password:string):boolean{
        const usuario=this.usuariosSistema.find(
            u=>u.correo===correo
        );
        if(!usuario){
            return false;
        }
        if (usuario.password!==password){
            return false;
        }
        const usuarioAuth:UsuarioAuth={
            nombre:usuario.nombre,
            correo:usuario.correo,
            rol:usuario.rol
        }
        localStorage.setItem(this.STORAGE_KEY,JSON.stringify(usuarioAuth));
        return true;
    }

    cerrarSesion():void{
        localStorage.removeItem(this.STORAGE_KEY);
    }
    //metodo para saber si es un usuario auteticado

    estaAutenticado():boolean{
        return localStorage.getItem(this.STORAGE_KEY)!=null;
    }

    //metodo que obtiene el usuario autenticado
    obtenerUsuario():UsuarioAuth|null{
        const usuario=localStorage.getItem(this.STORAGE_KEY);
        if(!usuario){
            return null
        }
        return JSON.parse(usuario)
    }

    // metodo para obtener el rol

    obtenerRol():string{
        return this.obtenerUsuario()?.rol??'';
    }
    obtenernombre():string{
        return this.obtenerUsuario()?.nombre??'';
    }
}
