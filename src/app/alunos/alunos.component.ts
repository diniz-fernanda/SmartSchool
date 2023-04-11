import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';
import { AlunoService } from './aluno.service';

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
  public modo = 'post';

  public alunos!: Aluno[];
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private fb: FormBuilder, 
              private modalService: BsModalService,
              private alunoService: AlunoService){
    this.criarForm();
  }

  ngOnInit(){
    this.carregarAlunos();
  }

  carregarAlunos(){
    this.alunoService.getAll().subscribe(
      {
        next: (alunos: Aluno []) => {this.alunos = alunos},
        error: erro => console.log(erro)
      }
    );
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }
  
  salvarAluno(aluno: Aluno){
   (aluno.id === 0) ? this.modo = 'post' : this.modo = 'put';
 
    this.alunoService[this.modo](aluno).subscribe(
      {
        next: (retorno: Aluno) => {
          console.log(retorno);
          this.carregarAlunos();
        },
        error: (erro: any) => {
          console.log(erro);
        }
      }
    );
  }

  deletarAluno(id: number){
    this.alunoService.delete(id).subscribe(
      {
        next: (model: any) => {
          console.log(model);
          this.carregarAlunos();
        },
        error: (erro: any) => {
          console.log(erro);
        }
      }
    )
  }

  alunoSubmit(){
    this.salvarAluno(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoNovo(){
    this.alunoSelecionado = new Aluno();
    this.alunoForm.patchValue(this.alunoSelecionado);
  }

  voltar(){
    this.alunoSelecionado = null as any;
  }
}
