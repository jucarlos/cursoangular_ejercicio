import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
  }

  registrarUsuario(formulario: NgForm) {

    if ( this.sonIguales(formulario.value.password1, formulario.value.password2)) {

      const usuario = new Usuario(
        formulario.value.nombre,
        formulario.value.email,
        formulario.value.password1,
       );

      this.usuarioService.crearUsuario(usuario)
      .subscribe( resp => {
          // console.log( resp );
          this.router.navigate(['/home']);
      });


    } else {
        Swal.fire('Error', 'Los campos password, tienen que ser iguales', 'info');
        return;
    }
  }

  sonIguales( campo1: string, campo2: string ) {

    // Si no se cumple tienes que devolver un error con el true y se se cumple unn null
    return campo1 === campo2;

  }



}
