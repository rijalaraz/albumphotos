import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';

import { UserService } from './_service/user.service';
import { AlbumService } from './_service/album.service';
import { PhotoService } from './_service/photo.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AlbumComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    UserService,
    AlbumService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


