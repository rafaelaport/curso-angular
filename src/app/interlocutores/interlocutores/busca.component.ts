import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html'
})
export class BuscaComponent implements OnInit {

  nome: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    //this.nome = this.route.snapshot.params['nome'];
  }

  ngOnInit() {
    // FAZ MESMA COISA QUE ESTA NO CONSTRUCTOR
    // no subscribe pode passar uma funcao com o parametro da url para filtrar o que deseja mostrar na tela (aula 54)
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.nome = params['nome'];
      }
    );
   }

   // boa pratica para se descrever da inscrição
   ngOnDestroy(){
     this.inscricao.unsubscribe();
   }

}