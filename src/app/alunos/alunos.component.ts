import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  public titulo = "Alunos";

  public alunos =[
    {nome: 'Marta' } ,
    {nome: 'Paula' } ,
    {nome: 'Laura' } ,
    {nome: 'Luiza' } ,
    {nome: 'lucas' } ,
    {nome: 'Pedro' } ,
    {nome: 'Paulo' } ,
  ];
}
