import {Component} from '@angular/core';
import {RouterOutlet, Routes} from '@angular/router';

import {AuthModule} from './auth/auth.module';

const routes: Routes = [];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
