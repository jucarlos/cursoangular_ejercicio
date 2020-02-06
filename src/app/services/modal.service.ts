import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  _notificarUsuarioLogeado = new EventEmitter<any>();


  modal = false;


  constructor() { }

  get notificarUsuarioLogeado(): EventEmitter<any> {
    return this._notificarUsuarioLogeado;
  }


  abrirModal() {
    this.modal = true;
  }

  cerrarModal() {
    this.modal = false;
  }
  
}
