import { Injectable } from '@angular/core';
import { TipoVehiculo } from '../models/tipo-vehiculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {


  // No hace falta ponerlo , pero mejor lo dejamos.
  httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );


  constructor(private http: HttpClient) { }

  // realmente la respuesto no es del todo así, porque vienen mas cosas.
  // por eso , utilizareé otro método
  // getTipoVehiculos(): Observable<TipoVehiculo[]> {

  //   const url = URL_SERVICIOS + '/tipovehiculo';

  //   return this.http.get<TipoVehiculo[]>( url );

  // }

  getTipoVehiculo( id: string ) {

    const url = URL_SERVICIOS + '/tipovehiculo' + '/' + id ;
    return this.http.get( url );

  }


  getTipoVehiculos() {

    const url = URL_SERVICIOS + '/tipovehiculo';
    return this.http.get( url );

  }

  guardarTipoVehiculo(tipoVehiculo: TipoVehiculo ) {

    let url = URL_SERVICIOS + '/tipovehiculo' ;

    if ( tipoVehiculo._id ) {
      url += '/' + tipoVehiculo._id;
      return this.http.put(url, tipoVehiculo , { headers: this.httpHeaders });
    } else {
      return this.http.post(url, tipoVehiculo , { headers: this.httpHeaders });
    }

  }

  borrarTipoVehiculo( id: string ) {

    const url = URL_SERVICIOS + '/tipovehiculo' + '/' + id ;
    return this.http.delete( url );
  }


}
