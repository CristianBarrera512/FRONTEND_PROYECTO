import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule,} from '@angular/forms';


interface Usuario{
  id:number;
  nombre:string;
  apellido:string;
  correo:string;
  rol:string;
  estado:boolean;
}

 const STORAGE_KEY='usuariosSistema';


@Component({
  selector: 'app-users',
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent implements OnInit {

  
  id:number=0;
  nombre:string='';
  apellido:string='';
  correo:string='';
  rol:string='Administrador';
  estado:boolean=true;
  
  /**Listas de usuarios, un arrelgo de usuarios */

  usuarios:Usuario[]=[];
  //lista filtrada
  usuariosFiltrados:Usuario[]=[];
  //input de busqueda
  textoBusqueda:string='';
  //implementacion del filtro
  filtroRol:string='';
  //Id en edicion
  idEditar:number | null=null;


  //pagina actual
  paginaActual: number=1;

  //cantidad de registro por pagina
  registroPorPagina:number=10;
  
  //lista que realmente muestra la tabla osea paginada
  usuariosPaginados:Usuario[]=[];

  //columna actualmente ordenada
  columnaOrden: string='';

  // direcion de orden 
  //true -> ascendente
  //false -> descendente

  ordenAscendente:boolean=true;


  mensaje:string=''
  tipoMensaje:'success' | 'error'|''='';

  //Bandera para saber si se esta editando un usuario

  modoEdicion:boolean=false;
  //mostrar o no mostrar el modal
  mostrarModalEliminar:boolean=false;
  //usuario a eliminar

  usuarioSeleccionado:Usuario|null=null;



  ngOnInit(): void {
    
      this.cargarUsuarios();
      this.actualizarPaginacion();
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

  correoExiste(correo:string, idUsuario: number | null=null):boolean{
    return this.usuarios.some(usuario=>usuario.correo.toLowerCase()===  correo.toLowerCase()&&
    usuario.id!==idUsuario);
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
    this.rol='Aprendiz',
    this.estado=true;
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

    if(this.correoExiste(this.correo,this.idEditar)){
      this.tipoMensaje='error'
      this.mensaje='el correo ya existe';
      return
     }

    if(this.idEditar!=null){
      const usuariobuscado= this.usuarios.find(usuario=>usuario.id==this.idEditar)

      if(usuariobuscado){
        usuariobuscado.nombre=this.nombre;
        usuariobuscado.apellido=this.apellido;
        usuariobuscado.correo=this.correo;
        usuariobuscado.rol=this.rol;
        usuariobuscado.estado=this.estado;
      }
      this.idEditar=null;
      this.guardarUsuarios();
      this.buscarUsuarios();
      alert('usuario actulizado')
      this.limpiarFormularioAutomatico();
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
    this.guardarUsuarios();
    this.buscarUsuarios();
    this.actualizarPaginacion();
    this.tipoMensaje='success';
    this.mensaje='usuario registrado correctamente.';

    this.limpiarFormularioAutomatico();


}
    limpiarFormularioAutomatico():void{
    this.id=0;
    this.nombre='';
    this.apellido='';
    this.correo='';
    this.rol='Aprendiz';
    this.estado=true;

    }
    obtenerTotalUsuarios():number{
      return this.usuarios.length
    }
     buscarUsuarios():void{

    this.usuariosFiltrados=this.usuarios.filter(usuario=>{
      const coincideTexto=
      usuario.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())||
      usuario.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase())||
      usuario.correo.toLowerCase().includes(this.textoBusqueda.toLowerCase());

      const coincideRol=
      this.filtroRol==''|| usuario.rol==this.filtroRol;
      this.paginaActual=1
      if(this.columnaOrden!==''){
        this.ordenar(this.columnaOrden);
      }
      this.actualizarPaginacion();
      return coincideTexto && coincideRol;
    });
  }

  editarUsuario(usuario:Usuario):void{
    this.idEditar=usuario.id;
    this.nombre=usuario.nombre;
    this.apellido=usuario.apellido;
    this.correo=usuario.correo;
    this.rol=usuario.rol;
    this.estado=usuario.estado;
  }
  actualizarPaginacion():void{
    const inicio=(this.paginaActual-1)*this.registroPorPagina;
    const fin= inicio + this.registroPorPagina;

    this.usuariosPaginados=this.usuariosFiltrados.slice(inicio,fin)
  }
  obtenerTotalPaginas():number{
    return Math.ceil(this.usuariosFiltrados.length/this.registroPorPagina)
  }
  cambiarPagina(pagina:number):void{
    if(pagina<1 || pagina>this.obtenerTotalPaginas()){
      return
    }
    this.paginaActual=pagina;
    this.actualizarPaginacion()
  }
  siguientePagina():void{
    this.cambiarPagina(this.paginaActual+1)
  }
  anteriorPagina():void{
    this.cambiarPagina(this.paginaActual-1)
  }
  obtenerPaginas():number[]{
    return Array.from({
      length: this.obtenerTotalPaginas()
    },(_,indice)=> indice+1);
  }
  ordenar(columna:string):void{
    if(this.columnaOrden===columna){
      this.ordenAscendente=!this.ordenAscendente;
    }else{
      this.columnaOrden=columna;
      this.ordenAscendente=true;

    }
    this.usuariosFiltrados.sort((a:Usuario,b:Usuario)=>{
      let valorA:any;
      let valorB:any;
      switch(columna){
        case 'id':
        valorA= a.id;
        valorB= b.id;     
        break; 
      case 'nombre':
        valorA= a.nombre.toLowerCase();
        valorB= b.nombre.toLowerCase();
        break;
      case 'rol':
        valorA= a.rol.toLowerCase();
        valorB= b.rol.toLowerCase();
        break;
      case 'apellido':
        valorA= a.apellido.toLowerCase();
        valorB= b.apellido.toLowerCase();
        break;
      case 'correo':
        valorA= a.correo.toLowerCase();
        valorB= b.correo.toLowerCase();
        break;
      case 'estado':
        valorA= a.estado ? 1:0;
        valorB= b.estado ? 1:0;
        break;
      default:
        return 0;
      }
      if(valorA<valorB){
        return this.ordenAscendente? -1:1;
      }
      if(valorA>valorB){
        return this.ordenAscendente? 1:-1;
      }
      return 0;
    });
   this.actualizarPaginacion();

  }

  obtenerIconoOrden(columna:string):string{
    if(this.columnaOrden!==columna){
      return '↕'
    }
    return this.ordenAscendente?'↑':'↓';
  }

  abrirModalEliminar(usuario:Usuario):void{
    this.usuarioSeleccionado=usuario;
    this.mostrarModalEliminar=true;
    
  }
  cerrarModal():void{
    this.mostrarModalEliminar=false;
    this.usuarioSeleccionado=null;
  }
  confirmarEliminar():void{
    if(!this.usuarioSeleccionado){
      return
    }
    this.usuarios=this.usuarios.filter(usuario=>usuario.id!==this.usuarioSeleccionado!.id)
    //actulizar  busqueda, filtros, el ordenamiento y paginacion
    this.guardarUsuarios();
    this.buscarUsuarios();
    this.actualizarPaginacion();

    //mensaje de exitos
    this.tipoMensaje='success'
    this.mensaje='usuario eliminado corretamente'

    this.cerrarModal();
  }

  guardarUsuarios():void{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.usuarios));
    this.actualizarPaginacion();
  }
  cargarUsuarios():void{
    const datos= localStorage.getItem(STORAGE_KEY)
    if(datos){
      this.usuarios=JSON.parse(datos);
    }else{
      this.cargarDatosIniciales();
      this.guardarUsuarios();
      
    }
    this.usuariosFiltrados=[...this.usuarios];
  }
  reiniciarDatos():void{
    const respuesta= confirm('¿Desea restaurar los usuarios iniciales?')
    if(!respuesta){
      return
    }
    localStorage.removeItem(STORAGE_KEY);
    this.cargarUsuarios();
    this.buscarUsuarios();
  }
}
