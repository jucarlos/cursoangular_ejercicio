import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService,
              private usuarioService: UsuarioService) { }

  recuerdame = false;

  usuario = new Usuario('', '', '');

  ngOnInit() {
    this.usuario.email = localStorage.getItem('email')  || '';
    if ( this.usuario.email.length > 1 ) {
      this.recuerdame = true;
    }
   }


  entrar() {

    this.usuarioService.login( this.usuario, this.recuerdame)
    .pipe(
      catchError( err  => {
        Swal.fire('Autenticación', err.error.err.message, 'info');
        // console.log( err.error.err.message );
        return throwError ( err );
      })
    )
    .subscribe( (resp: any) => {
      this.modalService._notificarUsuarioLogeado.emit(resp.usuario.nombre);
    });

    this.cerrarModal();

  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
