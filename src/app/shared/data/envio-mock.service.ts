import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvioMockService {
  async getEnvios() {
    return (
        [
          {
              "idEnvio": 5,
              "producto": "Alimentos",
              "numeroGuia": "1234567890",
              "cantidadProducto": 10,
              "fechaRegistro": "2024-02-19T05:00:00.000+0000",
              "fechaEntrega": "2024-02-25T05:00:00.000+0000",
              "precio": 100.5,
              "vehiculo": "Camion",
              "tipoEnvio": "Terrestre",
              "Cliente": "Juan Andres"
          },
          {
              "idEnvio": 7,
              "producto": "Maquillaje",
              "numeroGuia": "123456789",
              "cantidadProducto": 10,
              "fechaRegistro": "2024-02-21T05:00:00.000+0000",
              "fechaEntrega": "2024-02-28T05:00:00.000+0000",
              "precio": 100.5,
              "vehiculo": "Barco",
              "tipoEnvio": "Maritimo",
              "Cliente": "Luisa Maria"
          },
          {
              "idEnvio": 8,
              "producto": "Productos de aseo",
              "numeroGuia": "123456289",
              "cantidadProducto": 100,
              "fechaRegistro": "2024-02-21T05:00:00.000+0000",
              "fechaEntrega": "2024-02-28T05:00:00.000+0000",
              "precio": 100.5,
              "vehiculo": "Tractomula",
              "tipoEnvio": "Terrestre",
              "Cliente": "Diego Arias"
          },
          {
              "idEnvio": 11,
              "producto": "Productos textiles",
              "numeroGuia": "1AWFG6289",
              "cantidadProducto": 500,
              "fechaRegistro": "2024-02-21T05:00:00.000+0000",
              "fechaEntrega": "2024-02-28T05:00:00.000+0000",
              "precio": 660.5,
              "vehiculo": "Yate",
              "tipoEnvio": "Maritimo",
              "Cliente": "Carlos Martinez"
          }
        ]
    )
  }
}