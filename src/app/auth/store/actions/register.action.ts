import {createAction, props} from '@ngrx/store';

import {ActionTypesEnum} from '../enums/action-types..enum';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';

export const registerAction = createAction(ActionTypesEnum.REGISTER, props<{request: RegisterRequestInterface}>());
export const registerSuccessAction = createAction(
  ActionTypesEnum.REGISTER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);
export const registerFailureAction = createAction(ActionTypesEnum.REGISTER_FAILURE);
