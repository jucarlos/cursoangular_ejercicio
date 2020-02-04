import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tituloBoton = 'Sin identificar';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService._notificarUsuarioLogeado
    .subscribe( resp => {
        this.tituloBoton = resp;
    });
  }

  abrirModal() {
    this.modalService.abrirModal();
  }

}
