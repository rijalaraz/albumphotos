import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class PhotoService {

  constructor(
    private http: Http
  ) { }

  getPhotos(id){
    return this.http.get(environment.apiUrl + '/albums/'+ id + '/photos')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
