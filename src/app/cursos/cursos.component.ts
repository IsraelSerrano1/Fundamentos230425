import { Component } from '@angular/core';
import { Curso } from '../_modelo/curso';
import { nivel } from '../_modelo/nivel';
import { ServicioCursosService } from '../servicio-cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
cursos: Curso[]= [];
curso: Curso = new Curso(0,"",0,0)

constructor(private cursosService: ServicioCursosService,){
  this.cursos = this.cursosService.cursosS
}



opcion: string[] = Object.values(nivel) as string[];

}
