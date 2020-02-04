import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { URL_SERVICIOS } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  constructor( private http: HttpClient) { }

  guardarStorage( email: string, nombre: string ){
    localStorage.setItem('email', email);
    localStorage.setItem('nombre', nombre);
  }

  login( usuario: Usuario, recuerdame: boolean  ) {

    const url = URL_SERVICIOS + '/login';

    return this.http.post( url, usuario, { headers: this.httpHeaders });


  }

  crearUsuario( usuario: Usuario) {


    const url = URL_SERVICIOS + '/usuarios';

    return this.http.post(url, usuario, { headers: this.httpHeaders} )
    .pipe(
      map ( (resp: any) => {
        // console.log( 'Respuesta: ', resp);
        Swal.fire ('Usuario Creado', usuario.email, 'success');
        return resp.usuario;
      }),
      catchError ( (err ) => {
       // console.log('Error, ', err.error.error.message);
        Swal.fire('Error', err.error.error.message, 'info');
        return throwError( err );
      })
    ) ;

  }

}
