import { Routes } from '@angular/router';

// importacion del componente logins

import { LogisComponent } from './pages/logis/logis';
import { RegisterComponent } from './pages/register/register';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { UsersComponent } from './pages/users/users';

// Definición de rutas de la aplicacion 
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogisComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'users',
    component: UsersComponent
  }
]; 