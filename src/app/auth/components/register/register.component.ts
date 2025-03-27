import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {registerAction} from '../../store/actions/register.action';
import {isSubmittingSelector} from '../../store/selectors';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {AuthService} from '../../services/auth.service';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private _authService: AuthService = inject(AuthService);
  private _fb: FormBuilder = inject(FormBuilder);
  private _store: Store = inject(Store<AppStateInterface>);

  public form: FormGroup;

  public isSubmitting$: Observable<boolean>;

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue();
  }

  private initializeValue(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };

    this._store.dispatch(registerAction({request}));
  }

  private initializeForm(): void {
    this.form = this._fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }
}
