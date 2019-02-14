import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterlocutoresComponent } from './interlocutores/interlocutores.component';

const cursosRoutes: Routes = [
    { path: 'interlocutores', component: InterlocutoresComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(cursosRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InterlocutoresRoutingModule {}