import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../environments/environment';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosClienteService {

   // No hace falta ponerlo , pero mejor lo dejamos.
   httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );



  constructor(private http: HttpClient) { }


  obtenerVehiculo( id: string ) {

    const url = URL_SERVICIOS + '/vehiculo' + '/' + id ;
    return this.http.get( url , { headers : this.httpHeaders });
  }

  obtenerVehiculosCliente( id: string ) {

    const url = URL_SERVICIOS + '/vehiculos-cliente' + '/' + id ;
    return this.http.get( url , { headers : this.httpHeaders });
  }

  guardarVehiculoCliente( vehiculo: Vehiculo ) {

    let url = URL_SERVICIOS + '/vehiculo';

    if ( vehiculo._id ) {
      url += '/' + vehiculo._id;
      return this.http.put( url, vehiculo, { headers: this.httpHeaders });
    } else {
      return this.http.post( url, vehiculo, { headers: this.httpHeaders });
    }

  }

  borrarVehiculo( id: string ) {
    const url = URL_SERVICIOS + '/vehiculo' + '/' +  id;
    return this.http.delete( url , { headers: this.httpHeaders });
  }
}
