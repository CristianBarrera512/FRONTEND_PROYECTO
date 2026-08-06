import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  nombreSistema:string='Sistema ADSO'
  Institucion:string='Servicio Nacional de Aprendizaje- Sena'
  version:string='1.0.0'
  anio:number= new Date().getFullYear();
  desarrollo:string='Desarrollado por CAFEC'
}
