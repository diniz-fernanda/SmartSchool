import { Component, TemplateRef } from '@angular/core';
import { Aluno } from './models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  public modalRef?: BsModalRef;
  public alunoForm!: FormGroup;
  public titulo = "Alunos";
  public alunoSelecionado!: Aluno;
  public textSimple!: string;

  public alunos =[
    {id: 1, nome: 'Marta', sobrenome:'Kent', telefone: 33552646},
    {id: 2, nome: 'Paula', sobrenome:'Isabela', telefone: 33553366},
    {id: 3, nome: 'Laura', sobrenome:'Antonia', telefone: 33559988},
    {id: 4, nome: 'Luiza', sobrenome:'Maria', telefone: 33559495},
    {id: 5, nome: 'lucas', sobrenome:'Machado', telefone: 33554613},
    {id: 6, nome: 'Pedro', sobrenome:'Alvares', telefone: 33557879},
    {id: 7, nome: 'Paulo', sobrenome:'Cabral', telefone: 33558982},
  ];
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private fb: FormBuilder, 
              private modalService: BsModalService){
    this.criarForm();
  }

  ngOnInit(){

  }
  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value)
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null as any;
  }
}
