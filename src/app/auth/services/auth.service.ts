import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';

import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {environments} from '../../../environmetns/environments';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
  private _http: HttpClient = inject(HttpClient);

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this._http
      .post<AuthResponseInterface>(environments.apiUrl + '/users', {user: data})
      .pipe(map((res: AuthResponseInterface) => res.user));
  }
}
