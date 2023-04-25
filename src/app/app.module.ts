import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ModificarCursosComponent } from './modificar-cursos/modificar-cursos.component';
import { ServicioCursosService } from './servicio-cursos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ModificarCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioCursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
