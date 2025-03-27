import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';

import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.action';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';

@Injectable()
export class RegisterEffect {
  private actions$: Actions = inject(Actions);
  private _authService: AuthService = inject(AuthService);

  private register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this._authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser});
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );
}
