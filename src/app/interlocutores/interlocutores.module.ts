import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterlocutoresComponent } from './interlocutores/interlocutores.component';
import { BuscaComponent } from './interlocutores/busca.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InterlocutoresComponent,
    BuscaComponent
  ],
  exports: [
    InterlocutoresComponent,
    BuscaComponent
  ],
  providers: [ ]
})
export class InterlocutoresModule { }