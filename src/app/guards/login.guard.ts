import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( private usuarioService: UsuarioService ) {}

  canActivate(): boolean {

    console.log( this.usuarioService.estaAutenticado());

    if ( this.usuarioService.estaAutenticado() ) {
      console.log('Pasando por LoginGuard AUTENTICADO');
    } else {
      console.log('Pasando por LoginGuard NO AUTENTICADO');
    }

    return true;
  }

}
