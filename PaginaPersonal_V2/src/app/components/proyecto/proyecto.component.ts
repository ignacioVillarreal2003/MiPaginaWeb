import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProyectoService } from 'src/app/service/proyecto.service';
import { IProyecto } from 'src/app/service/IProyecto';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  constructor(private proyectoService: ProyectoService, private route: ActivatedRoute, private location: Location){}

  proyecto: IProyecto | undefined;

  ngOnInit(): void {
    this.getProyecto();
  }
  
  getProyecto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proyectoService.getProyecto(id)
      .subscribe(proyecto => this.proyecto = proyecto);
  }

}
