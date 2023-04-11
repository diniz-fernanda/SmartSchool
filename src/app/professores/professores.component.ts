import { Component, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

 public modalRef?: BsModalRef;
 public titulo = 'Professores';
 public professorSelecionado!: Professor;
 public professorForm!: FormGroup;
 public modo = 'post';

 public professores!: Professor[];

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService,) {
    this.criarForm();
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(){
    this.carregarProfessores();
  }

  voltar(){
    this.professorSelecionado = null as any;
  }
  
  carregarProfessores(){
    this.professorService.getAll().subscribe(
      {
        next: (professores: Professor[]) => {
          this.professores = professores;
        },
        error: (erro: any) => {
          console.log(erro);
        }
      }

    )
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  professorNovo(){
    this.professorSelecionado = new Professor();
    this.professorForm.patchValue(this.professorSelecionado);
  }

  criarForm(){
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required]
    });
  }

  salvarProfessor(professor: Professor){
    (professor.id === 0) ? this.modo = 'post' : this.modo = 'put';

    this.professorService[this.modo](professor).subscribe(
      {
        next: () => {
          this.carregarProfessores();
        },
        error: (erro: any) => {
          console.log(erro);
        }
      }
    );
  }

  professorSubmit(){
    this.salvarProfessor(this.professorForm.value);
  }
}
