import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public modalService: ModalService, public usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  abrirModal() {
    this.modalService.abrirModal();
  }

}
