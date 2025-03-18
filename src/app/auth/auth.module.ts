import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {RegisterComponent} from './components/register/register.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthLayoutComponent} from './components/auth-layout.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/redusers';

@NgModule({
  declarations: [AuthLayoutComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authReducer', authReducer),
  ],
  exports: [],
})
export class AuthModule {}
