import { NgFor, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';


interface Usuario{
  id:number;
  nombre:string;
  apellido:string;
  correo:string;
  rol:string;
  estado:boolean;
}

@Component({
  selector: 'app-users',
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent implements OnInit {

  
  id:number=0;
  nombre:string='';
  apellido:string='';
  correo:string='';
  rol:string='Aprendiz';
  estado:boolean=true;
  
  /**Listas de usuarios, un arrelgo de usuarios */

  usuarios:Usuario[]=[];

  mensaje:string=''
  tipoMensaje:'success' | 'error'|''='';

  //Bandera para saber si se esta editando un usuario

  modoEdicion:boolean=false;

  ngOnInit(): void {
    
      this.cargarDatosIniciales();

  }

  cargarDatosIniciales():void{
    this.usuarios=[
      {
        id:1,
        nombre:'Cristian',
        apellido:'Barrera',
        correo:'pera000890@gmail.com',
        rol:'Administrador',
        estado: true
      },
      {
        id:2,
        nombre:'David',
        apellido:'Cruz',
        correo:'pera890@gmail.com',
        rol:'Instructor',
        estado: true
      },
      {
        id:3,
        nombre:'Maria',
        apellido:'Rodriguez',
        correo:'maria@sena.edu.co',
        rol:'Aprendiz',
        estado: false 
      }
    ]
  }

  validarCorreo(correo:string):boolean{
    const expresion= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA]{2,}$/;
    return expresion.test(correo);
  }

  correoExiste(correo:string):boolean{
    return this.usuarios.some(usuario=>usuario.correo.toLowerCase()===  correo.toLowerCase());
  }

  limpiarFormulario():void{

    const respuesta = confirm('¿Desea Limpiar el formulario?')

    if(!respuesta){
      return 
    }
    this.id=0,
    this.nombre='',
    this.apellido='',
    this.correo='',
    this.rol='',
    this.estado=true
    this.mensaje='';
  }

  registrarUsuario():void{
     if(this.nombre.trim()===''|| this.apellido.trim()===''|| this.correo.trim()===''){
      this.tipoMensaje='error'
      this.mensaje='Todos los campos son obligatorios';
      return
     }

     if(!this.validarCorreo(this.correo)){
      this.tipoMensaje='error'
      this.mensaje='El formato del correo es incorrecto';
      return
     }

     if(this.correoExiste(this.correo)){
      this.tipoMensaje='error'
      this.mensaje='el correo ya existe';
      return
     }



    const nuevoUsuario:Usuario={
      id:this.usuarios.length+1,
      nombre:this.nombre,
      apellido:this.apellido,
      correo:this.correo,
      rol:this.rol,
      estado:this.estado
    };

    
    this.usuarios.push(nuevoUsuario);
    this.tipoMensaje='success'
    this.mensaje='usuario registrado correctamente.';
    this.limpiarFormulario();
  }
}
