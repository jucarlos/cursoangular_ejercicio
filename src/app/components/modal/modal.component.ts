import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService,
              private usuarioService: UsuarioService) { }

  nombre = 'Juan Carlos';
  recuerdame = false;

  usuario = new Usuario('', '', '');

  ngOnInit() {
  }


  entrar() {

    this.usuarioService.login( this.usuario, this.recuerdame)
    .subscribe( (resp: any) => {
      console.log ( resp );
      if ( !resp.ok ) {
        Swal.fire('Error', 'Usuario o contraseña inválida', 'info');
      }
    });


    this.modalService._notificarUsuarioLogeado.emit(this.nombre);
    this.cerrarModal();

  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

}
