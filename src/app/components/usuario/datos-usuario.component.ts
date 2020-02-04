import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styles: []
})
export class DatosUsuarioComponent implements OnInit {


  imagen = '';


  usuario: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
