import { Component } from '@angular/core';


interface Card{
  imagen:string;
  texto:string;
  boton:string;
}
interface SubSeccion{
  titulo:string;
  texto:string;
  imagen:string;
}

@Component({
  selector: 'app-contenido-dinamico',
  imports: [],
  templateUrl: './contenido-dinamico.html',
  styleUrl: './contenido-dinamico.css',
})
export class contenidodinamicoComponent {
  cards:Card[]=[
  {
    imagen:'https//picsum.photos/id/1015/600/400',
    texto:'Conoce nuestros cursos de formacion',
    boton:'ver cursos'
  },
  {
    imagen:'https//picsum.photos/id/1016/600/400',
    texto:'aprende nuevas tecnologias de desarrollo',
    boton:'mas informacion'
  },
  {
    imagen:'https//picsum.photos/id/1018/600/400',
    texto:'descrube nuestro progrmas de formacion',
    boton:'Ver programas'
  },
  {
    imagen:'https//picsum.photos/id/1025/600/400',
    texto:' conoces las oportunidades desponibles',
    boton:'conocer mas'
  },
  {
    imagen:'https//picsum.photos/id/1035/600/400',
    texto:'explorea nuestro recuersos educativos',
    boton:'explora'
  }
];

subsecciones:SubSeccion[]=[
  {
    titulo:'Formacion profesional',
    texto:'encutre los programas de formacion diseñados para fortalecer ytus conocimiento y habilidades',
    imagen:'https//picsum.photos/id/1043/600/400'
  },
  {
    titulo:'Tecnologia',
    texto:'aprendie sobre desarrollo de sotfware, programacion, base de datos y nuevas tecnologias',
    imagen:'https//picsum.photos/id/180/800/500'
  },
  {
    titulo:'Innovacion',
    texto:'Conoce proyectos y herramientas orientadas a la innovacion y trasformacion',
    imagen:'https//picsum.photos/id/48/800/500'
  },
];

  ejecutarAccion(card:Card):void{
    alert(`Seleccionaste: ${card.boton}`)
  }
}
