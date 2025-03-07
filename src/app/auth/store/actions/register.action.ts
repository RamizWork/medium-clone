import {createAction, props} from '@ngrx/store';

import {ActionTypesEnum} from '../enums/action-types..enum';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

export const registerAction = createAction(ActionTypesEnum.REGISTER, props<RegisterRequestInterface>());
