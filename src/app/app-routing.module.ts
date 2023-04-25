import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarCursosComponent } from './modificar-cursos/modificar-cursos.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: '', component:CursosComponent},
  {path: 'update/:id', component:ModificarCursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
