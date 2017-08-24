import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { environment } from '../../environments/environment';
import { User } from '../_model/user';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get(environment.apiUrl + '/users')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
