import { Component } from '@angular/core';
import { Curso } from '../_modelo/curso';
import { ServicioCursosService } from '../servicio-cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-cursos',
  templateUrl: './modificar-cursos.component.html',
  styleUrls: ['./modificar-cursos.component.css'],
})
export class ModificarCursosComponent {
  curso: Curso = new Curso(0, '', 0, 0);
  cursos: Curso[] = [];

  constructor(
    private cursosService: ServicioCursosService,
    private activarRutas: ActivatedRoute
  ) {
    this.cursos = this.cursosService.cursosS;
  }

  updateCurso() {
    this.cursosService.updateCursoS(this.curso.id, this.curso);
  }

  ngOnInit() {
    //this.curso.id= this.activarRutas.params.snapshot.params['id']
    this.activarRutas.params.subscribe((data) => {
      let idaux = data['id'];
      if (idaux != undefined) {
        this.curso = this.cursosService.encontrarCurso(idaux);
      }
    });
  }
}
