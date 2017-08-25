import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';

import { AlbumService } from '../_service/album.service';
import { Album } from '../_model/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  idUser: number;
  albums: Album[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = params['id'];
      if (this.idUser > 0) {
        this.albumService.getAlbums(this.idUser).subscribe(albums => {
          this.albums = albums;
        });
      }
    });
  }

  backToUsers(){
    this.location.back();
  }

}
