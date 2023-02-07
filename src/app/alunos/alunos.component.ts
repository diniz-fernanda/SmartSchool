import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  public titulo = "Alunos";
  public alunoSelecionado!: string;

  public alunos =[
    {id: 1, nome: 'Marta', sobrenome:'Kent', telefone: 33552646},
    {id: 2, nome: 'Paula', sobrenome:'Isabela', telefone: 33553366},
    {id: 3, nome: 'Laura', sobrenome:'Antonia', telefone: 33559988},
    {id: 4, nome: 'Luiza', sobrenome:'Maria', telefone: 33559495},
    {id: 5, nome: 'lucas', sobrenome:'Machado', telefone: 33554613},
    {id: 6, nome: 'Pedro', sobrenome:'Alvares', telefone: 33557879},
    {id: 7, nome: 'Paulo', sobrenome:'Cabral', telefone: 33558982},
  ];

  alunoSelect(aluno: any){
    this.alunoSelecionado = aluno.nome;
  }

  voltar(){
    this.alunoSelecionado ='';
  }
}
