import { Injectable } from '@angular/core';
import { Curso } from './_modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursosService {
  cursosS: Curso[]= [
    new Curso(1, "Java", 200, 1),
    new Curso(2, "Git", 30, 0),
    new Curso(3, "SQL", 150, 2)
  ]

  constructor() { }

  updateCursoS(id: number, newCurso: Curso){    
    let index = this.cursosS.findIndex((cursosS) => cursosS.id == id);   
    if(index != -1){      
    this.cursosS[index] = newCurso;    
    } else{
      this.cursosS.push(newCurso);
    }
  }

   encontrarCurso(index: number){
    let curso: Curso = this.cursosS[index-1]
    return curso;
  }
}
