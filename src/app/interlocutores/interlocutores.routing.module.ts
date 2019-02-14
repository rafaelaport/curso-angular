import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterlocutoresComponent } from './interlocutores/interlocutores.component';
import { BuscaComponent } from './interlocutores/busca.component';

const interlocutoresRoutes: Routes = [
    { path: 'interlocutores', component: InterlocutoresComponent },
    { path: 'busca/:nome', component: BuscaComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(interlocutoresRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InterlocutoresRoutingModule {}