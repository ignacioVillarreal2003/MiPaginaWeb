import { Injectable } from '@angular/core';
import { IProyecto } from './IProyecto';
import { proyectos } from './Proyectos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor() { }

  getProyectos(): Observable<IProyecto[]> {
    return of(proyectos);
  }

  getPrimerosProyectos(): Observable<IProyecto[]> {
    const proyectosDestacados = proyectos.slice(0, 2);
    return of(proyectosDestacados);
  }

  getProyecto(id: number): Observable<IProyecto> {
    const proyecto = proyectos.find(p => p.id === id)!;
    return of(proyecto);
  }
}
