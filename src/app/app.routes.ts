// importacion del componente logins
import { LogisComponent } from './pages/logis/logis';
import { RegisterComponent } from './pages/register/register';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { UsersComponent } from './pages/users/users';
import { LayoutComponent } from './layout/layout/layout';
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { ContenidoDinamicoComponent} from './pages/contenido-dinamico/contenido-dinamico';
import { ReservaVuelosComponent } from './pages/vuelos/reserva-vuelos/reserva-vuelos';


// Definición de rutas de la aplicacion 
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate:[
      authGuard
    ],
    children:[
        {
            path:'',
            redirectTo:'dashboard',
            pathMatch:'full'
        },
        {
            path:'dashboard',
            component:DashboardComponent
        },
        {
            path:'users',
            component:UsersComponent
        },
        {
            path:'contenido',
            component:ContenidoDinamicoComponent
        },
        {
          path:'reservas',
          component:ReservaVuelosComponent
        }
    ]
  },
  {
    path: 'login',
    component: LogisComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

]; 