import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ModalService } from '../../services/modal.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styles: []
})
export class DatosUsuarioComponent implements OnInit {


  imagen = '';
  nombreUsuario = '';


  usuario: Usuario;

  constructor(private modalService: ModalService, private usuarioService: UsuarioService) {}

  ngOnInit() {

    this.nombreUsuario = this.usuarioService.usuario.nombre;
    this.modalService._notificarUsuarioLogeado
    .subscribe( resp => {
        this.nombreUsuario = resp;
    });
  }


}
