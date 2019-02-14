import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html'
})
export class BuscaComponent implements OnInit {

  nome: string;

  constructor(private route: ActivatedRoute) {
    this.nome = this.route.snapshot.params['nome'];
  }

  ngOnInit() { }

}