import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';

import { Photo } from '../_model/photo';
import { PhotoService } from '../_service/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  idAlbum: number;
  photos: Photo[];

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idAlbum = params['id'];
      if (this.idAlbum > 0) {
        this.photoService.getPhotos(this.idAlbum).subscribe(photos => {
          this.photos = photos;
        });
      }
    });
  }

  backToAlbums(){
    this.location.back();
  }


}
