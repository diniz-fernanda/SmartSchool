import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
 public titulo = 'Professores';
 public professorSelecionado!: string;

 public professores =[
  {id: 1, nome: 'Lauro', disciplina:'Matemática' },
  {id: 2, nome: 'Roberto', disciplina: 'Física'},
  {id: 3, nome: 'Ronaldo', disciplina: 'Português' },
  {id: 4, nome: 'Rodrigo', disciplina: 'Inglês'},
  {id: 5, nome: 'Alexandre', disciplina: 'Programação'}, 
];

professorSelect(prof: any){
  this.professorSelecionado = prof.nome;
}

voltar(){
  this.professorSelecionado = '';
}
}
