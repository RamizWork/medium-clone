import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {RegisterComponent} from './components/register/register.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthLayoutComponent} from './components/auth-layout.component';
import {authReducer} from './store/redusers';
import {AuthService} from './services/auth.service';
import {RegisterEffect  } from './store/effects/register.effect';

@NgModule({
  declarations: [AuthLayoutComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    EffectsModule.forRoot([]),
  ],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
