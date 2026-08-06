import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  nombreSistema:string='Sistema ADSO'
  institucion:string='Servicio Nacional Del Aprendizaje - SENA';
  version:string='1.0.0';
  anio:number=new Date().getFullYear();
  Desarrollador:string='Bryan Reyes Aprendiz'
}
