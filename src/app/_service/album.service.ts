import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class AlbumService {

  constructor(
    private http: Http
  ) { }

  getAlbums(id){
    return this.http.get(environment.apiUrl + '/users/'+ id + '/albums')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
