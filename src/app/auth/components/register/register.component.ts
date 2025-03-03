import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private _fb: FormBuilder = inject(FormBuilder);

  public form: FormGroup;

  ngOnInit(): void {
      this.initializeForm();
  }

  public onSubmit(): void {
    console.log(this.form.value);
  }

  private initializeForm(): void {
    this.form = this._fb.group({
        userName: ['', Validators.required],
        email: '',
        password: ''
    });
  }
}
