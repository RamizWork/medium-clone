import {createAction, props} from '@ngrx/store';

import {ActionTypesEnum} from '../enums/action-types..enum';

export const registerAction = createAction(
  ActionTypesEnum.REGISTER,
  props<{userName: string; email: string; password: string}>()
);
