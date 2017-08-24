import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';

const ROUTES:Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'users/:id/albums', 
    component: AlbumComponent
  },
  {
    path: 'albums/:id/photos', 
    component: PhotoComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
