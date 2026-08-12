import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';



interface Vuelo {
  id:number;
  origen:string;
  destino:string;
  hora:string;
  precio:number;
  duracion:string;
}

@Component({
  selector: 'app-reserva-vuelos',
  imports: [
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    NgIf
],
  templateUrl: './reserva-vuelos.html',
  styleUrl: './reserva-vuelos.css',
})
export class ReservaVuelosComponent {


  origen:string='';
  destino:string='';
  fechaSalida:Date| null=null;
  pasajero:number=1;

  cargando:boolean=false;
  progreso:number=0;

  columnas:string[]=[
    'origen',
    'destino',
    'hora',
    'duracion',
    'precio',
    'accion'
  ]

  vuelos:Vuelo[]=[
    {
      id:1,
      origen:'bogota',
      destino:'yopal',
      hora:'8:30',
      precio:180000 ,
      duracion:'1h 06m'
    },
        {
      id:2,
      origen:'bogota',
      destino:'cali',
      hora:'10:15',
      precio:210000,
      duracion:'1h 10m'
    },
        {
      id:3,
      origen:'bogota',
      destino:'Cartagena',
      hora:'12:30',
      precio:350000,
      duracion:'1h 25m'
    },
        {
      id:4,
      origen:'bogota',
      destino:'barraquilla',
      hora:'16:20',
      precio:320000,
      duracion:'1h 30m'
    }
  ]
  constructor(){

  }

  buscarVuelos():void{
    if(this.origen.trim()===''){
      alert('Por favor ingrese el origen.')
      return;
    }
    if(this.destino.trim()===''){
      alert('Por favor ingrese el destino.')
      return;
    }
    if(this.fechaSalida===null){
      alert('Por favor ingrese la fecha de salida.')
      return;
    }
    if(this.pasajero<1){
      alert('debe seleccionar al menos un pasajero')
      return;
    }
    this.cargando=true;
    this.progreso=0;
    this.progreso=25;
    setTimeout(() => {
      this.progreso=50;
    },100);
    setTimeout(() => {
      this.progreso=75;
    },100);
    setTimeout(()=>{
      this.progreso=100;
    },100);
    setTimeout(()=>{
      this.cargando=false;
      alert('busqueda finalizada')
    },100);
  }


  limpiarBusqueda():void{
    this.origen='';
    this.destino='';
    this.fechaSalida=null;
    this.pasajero=1;
    this.progreso=0;
    this.cargando=false;
  }

   reservar(vuelo:Vuelo):void{
    alert(
      'vielo seleccionao:\n\n'+
      'origen'+vuelo.origen+'\n'+
      'destino:'+vuelo.destino+'\n'+
      'hora:'+vuelo.hora+'\n'+
      'precio'+vuelo.precio+'\n'+
      'duracion'+ vuelo.duracion+'\n'
    )
   }
}

