import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {registerAction} from '../../store/actions/register.action';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private _fb: FormBuilder = inject(FormBuilder);
  private _store: Store = inject(Store);

  public form: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    this._store.dispatch(registerAction(this.form.value));
    console.log(this.form.value);
  }

  private initializeForm(): void {
    this.form = this._fb.group({
      userName: ['', Validators.required],
      email: '',
      password: '',
    });
  }
}
