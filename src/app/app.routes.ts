import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { ListEnviosComponent } from './feature/list-envios/list-envios.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'envios', component: ListEnviosComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
