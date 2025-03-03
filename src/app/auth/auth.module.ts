import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {RegisterComponent} from './components/register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class AuthModule {}
