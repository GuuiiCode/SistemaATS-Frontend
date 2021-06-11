import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../services/candidato.services';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  candidatos: any[] = [];
  candidato: any = {};  
  showList: boolean = true; 

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.get();
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
