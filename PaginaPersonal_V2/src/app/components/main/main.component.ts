import { Component, ElementRef, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import Rellax from 'rellax';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { IProyecto } from 'src/app/service/IProyecto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private el: ElementRef, private proyectoService: ProyectoService) {}

  proyectos: IProyecto[] = [];

  getProyectos(): void {
    this.proyectoService.getPrimerosProyectos()
        .subscribe(proyectos => this.proyectos = proyectos);
  }

  ngOnInit() {
    const rellax = new Rellax('.rellax', {
      speed: -7, 
      center:true
    });
    this.getProyectos();
  }

  ngAfterViewInit() {
    const a1 = this.el.nativeElement.querySelectorAll('.animacion1');

    var animation1 = anime.timeline({
      targets: a1,
      delay: anime.stagger(100),
      loop: true
    });

    animation1
      .add({
        translateY: -20
      })
      .add({
        translateY: 0
      });
    

  }

  enviarCorreo() {
    const destinatario = 'tudirecciondecorreo@gmail.com';
    const asunto = '¡Hola! Estoy interesado en contactarte.';
    const cuerpoMensaje = 'Hola, \n\nMe gustaría ponerme en contacto contigo para discutir...';

    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoMensaje)}`;

    window.location.href = mailtoLink;
  }

  abrirCV(){    
    const cv = document.querySelector('#cv-content')
    console.log(cv);
    cv?.classList.add('is-visible')
    cv?.classList.remove('cv-content')
  }
}
