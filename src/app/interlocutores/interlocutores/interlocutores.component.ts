import { Component, OnInit } from '@angular/core';

import { INTERLOCUTORES } from '../mock/mock-interlocutores';

@Component({
  selector: 'app-interlocutores',
  templateUrl: './interlocutores.component.html'
})
export class InterlocutoresComponent implements OnInit {

    interlocutores = INTERLOCUTORES;

  constructor() { }

  ngOnInit() { }

}