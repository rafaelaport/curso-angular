import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

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
