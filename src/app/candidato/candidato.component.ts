import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../services/candidato.services';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {

  candidatos: any[] = [];
  // candidato: any = {}; 
  // userLogged: any = {};
  // showList: boolean = true; 

  constructor(private candidatoDataService: CandidatoService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.candidatoDataService.get().subscribe((data:any[]) => {
      this.candidatos = data;
      // this.showList = true;
    }, error => {
        console.log(error);
        alert('erro interno do sistema');
    })
  }

  // save() {
  //   if (this.candidato.id) {
  //     this.put();
  //   } else {
  //     this.post();
  //   }    
  // }

  // openDetails(user) {
  //   this.showList = false;
  //   this.candidato = user;
  // }

  // post() {
  //   this.candidatoDataService.post(this.candidato).subscribe(data => {
  //     if (data) {
  //       alert('Usuário cadastrado com sucesso');
  //       this.get();
  //       this.candidato = {};
  //     } else {
  //       alert('Erro ao cadastrar usuário');
  //     }
  //   }, error => {
  //     console.log(error);
  //     alert('erro interno do sistema');
  //   })
  // }

  // put() {
  //   this.candidatoDataService.put(this.candidato).subscribe(data => {
  //     if (data) {
  //       alert('Usuário atualizado com sucesso');
  //       this.get();
  //       this.candidato = {};
  //     } else {
  //       alert('Erro ao atualizar usuário');
  //     }
  //   }, error => {
  //     console.log(error);
  //     alert('erro interno do sistema');
  //   })
  // }

  // delete() {
  //   this.candidatoDataService.delete().subscribe(data => {
  //     if (data) {
  //       alert('Usuário excluído com sucesso');
  //       this.get();
  //       this.candidato = {};
  //     } else {
  //       alert('Erro ao excluir usuário');
  //     }
  //   }, error => {
  //     console.log(error);
  //     alert('erro interno do sistema');
  //   })
  // }
  
  // getUserData() {
  //   this.userLogged = JSON.parse(localStorage.getItem('user_logged')); 
  // }

}
