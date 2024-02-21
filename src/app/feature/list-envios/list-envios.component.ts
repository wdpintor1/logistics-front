import { Component } from '@angular/core';
import { NavBarComponent } from '../envios/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { EnvioMockService } from '../../shared/data/envio-mock.service'
//import { EnvioService } from '../envios/shared/services/envios/envios.service'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-envios',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './list-envios.component.html',
  styleUrl: './list-envios.component.css'
})
export class ListEnviosComponent {
  constructor(private enviosMockService: EnvioMockService)
     { }
  envios: any[] = [];
  ngOnInit(): void {
    this.geEnviosData();
  }

  geEnviosData() {
    this.enviosMockService.getEnvios().then(respuesta => {
      if (respuesta) {
        this.envios = respuesta;
      }
    });
  }
}
