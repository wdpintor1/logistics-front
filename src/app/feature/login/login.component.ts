import { Component } from '@angular/core';
import { NavBarComponent } from '../envios/nav-bar/nav-bar.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
