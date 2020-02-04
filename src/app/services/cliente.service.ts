import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../environments/environment';
import { Cliente } from '../models/cliente';
import { SubirArchivoService } from './subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );


  constructor(private http: HttpClient,
              private subirArchivoService: SubirArchivoService) { }


  getClientes(desde = 0 ) {

    const url = URL_SERVICIOS + '/cliente?limite=5&desde=' + desde;
    return this.http.get( url )
    .pipe(
      map ( (resp: any) => {
        //return resp.clientes;
        return resp;
      })
    );
  }

  getCliente( id: string ) {
    const url = URL_SERVICIOS + '/cliente' + '/' + id;
    return this.http.get( url );
  }

  guardarCliente( cliente: Cliente) {

    let url = URL_SERVICIOS + '/cliente';

    if ( cliente._id ){
      url += '/' + cliente._id;
      return this.http.put( url, cliente, { headers: this.httpHeaders} );
    } else {

      return this.http.post( url, cliente, { headers: this.httpHeaders} );
    }

  }

  borrarCliente( id: string ) {
    const url = URL_SERVICIOS + '/cliente' + '/' + id;
    return this.http.delete( url );

  }


  cambiarImagen( archivo: File, id: string ) {

    return this.subirArchivoService.subirArchivo( archivo , 'clientes', id );
  }





}
