import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public modalService: ModalService,
              public usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
  }

  abrirModal() {
    this.modalService.abrirModal();
  }

  salir() {
    this.usuarioService.logout();
    this.router.navigate(['/home']);
  }

}
