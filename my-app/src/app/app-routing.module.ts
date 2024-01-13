import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';


const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'proyecto/:id', component: ProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
