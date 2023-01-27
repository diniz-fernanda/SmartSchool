import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
 public titulo = 'Professores';

 public professores =[
  {nome: 'Lauro' } ,
  {nome: 'Roberto' } ,
  {nome: 'Ronaldo' } ,
  {nome: 'Rodrigo' } ,
  {nome: 'Alexandre' } ,
];
}
