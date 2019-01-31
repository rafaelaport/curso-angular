import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  photos: any[] = [];

  //Construtor usado somente para injeção de dependência
  constructor(private photoService: PhotoService){}
  
  //Ciclo de vida do componente, fase OnInit ocorre depois de uma instância de APPComponent
  ngOnInit(): void{
    this.photoService
    .listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
  }
}
