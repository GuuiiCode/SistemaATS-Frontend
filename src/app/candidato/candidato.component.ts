import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatoService } from '../services/candidato.services';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  form: FormGroup;
  candidatos: any[] = [];
  candidato: any = {};  
  showList: boolean = true; 

  constructor(private formBuilder: FormBuilder,
              private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.get();
    this.validacaoFormulario();
  }

  teste(event){
    console.log(event.target.value);
  }
  
  validacaoFormulario(){
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required, Validators.maxLength(14)]],
      genero: [],
      dataNascimento: [null, [Validators.required, Validators.minLength(10)]]
    });
  }

  get() {
    this.candidatoService.get().subscribe((data:any[]) => {
      this.candidatos = data;
      this.showList = true;
    }, error => {
        console.log(error);
        alert('erro interno do sistema');
    })
  }

  salvar() {
    if(this.candidato.id){
      this.put();
    }else{
      this.post();
    }
  }

  limparCampos() {
    this.showList = !this.showList;
    this.candidato = {};
    this.validacaoFormulario();
  }

  mostrar(candidato) { 
    this.showList = false;
    this.candidato = candidato;
  }

  post(){
    this.candidatoService.post(this.candidato).subscribe(data => {
      if (data) {
        alert('Candidato cadastrado com sucesso');
        this.get();
        this.candidato = {};
      } else {
        alert('Erro ao cadastrar candidato');
      }
    }, error => {
      console.log(error);
      alert('erro interno do sistema');
    })
  }

  put(){
    this.candidatoService.put(this.candidato).subscribe(data => {
      if (data) {
        alert('Candidato cadastrado com sucesso');
        this.get();
        this.candidato = {};
      } else {
        alert('Erro ao cadastrar candidato');
      }
    }, error => {
      console.log(error);
      alert('erro interno do sistema');
    })
  }

  delete(candidato){
    this.candidatoService.delete(candidato.id).subscribe(data => {
      if(data){
        alert('Candidado excluído com sucesso');
        this.get();
        this.candidato = {};
      } else {
        alert('Erro ao excluir candidato');
      }
    }, error => {
      console.log(error);
      alert('erro interno do sistema');
    })
  }
  
}
