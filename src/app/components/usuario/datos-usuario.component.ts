import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styles: []
})
export class DatosUsuarioComponent implements OnInit {


  imagen = '';
  nombreUsuario = '';


  usuario: Usuario;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService._notificarUsuarioLogeado
    .subscribe( resp => {
        this.nombreUsuario = resp;
    });
  }

}
