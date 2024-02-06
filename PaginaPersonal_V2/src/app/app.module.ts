import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { Forma1Component } from './formas/forma1/forma1.component';
import { Forma2Component } from './formas/forma2/forma2.component';
import { Forma3Component } from './formas/forma3/forma3.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { MasProyectosComponent } from './components/mas-proyectos/mas-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Forma1Component,
    Forma2Component,
    Forma3Component,
    ProyectoComponent,
    MasProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
