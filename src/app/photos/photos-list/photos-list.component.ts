import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

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
