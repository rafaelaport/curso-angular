import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { InterlocutoresComponent } from './interlocutores/interlocutores.component';

const routes: Routes = [
    { path: 'user/:userName', component: PhotoListComponent},
    { path: 'p/add', component: PhotoFormComponent},
    { path: 'interlocutores', component: InterlocutoresComponent},
    { path: '**', component: NotFoundComponent}
]

@NgModule({

    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
