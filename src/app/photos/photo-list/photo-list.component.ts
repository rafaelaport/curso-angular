import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];
  
  //Construtor usado somente para injeção de dependência
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ){}
  
  //Ciclo de vida do componente, fase OnInit ocorre depois de uma instância de APPComponent
  ngOnInit(): void{

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
    .listFromUser(userName)
    .subscribe(photos => this.photos = photos);
  }
}
