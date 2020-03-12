import { Component, OnInit } from '@angular/core';
import { TipoVehiculo } from '../../models/tipo-vehiculo';
import { TipoVehiculoService } from '../../services/tipo-vehiculo.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-tipo-vehiculo',
  templateUrl: './tipo-vehiculo.component.html',
  styles: []
})
export class TipoVehiculoComponent implements OnInit {

  tipoVehiculos: TipoVehiculo[] = [] ;

  constructor(
    public usuarioService: UsuarioService,
    private modalService: ModalService,
    private tipoVehiculoService: TipoVehiculoService,
    private router: Router) {

   }

  ngOnInit() {

    this.modalService._notificarUsuarioLogeado
      .subscribe( (resp: string) => {
        if ( resp === 'acceso') {
          this.cargarTiposVehiculos();
        }
      });

    if ( this.usuarioService.estaAutenticado() ){
      this.cargarTiposVehiculos();
    }
  }

  editarTipoVehiculo( tv: TipoVehiculo ) {
    this.router.navigate(['/tipovehiculo', tv._id ]);
  }

  borrarTipoVehiculo( tv: TipoVehiculo) {

    Swal.fire({
      title: 'Estás seguro',
      text: `Vas a borrar el tipo de vehículos ${tv.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo'
    }).then((result) => {
      if (result.value) {
        this.tipoVehiculoService.borrarTipoVehiculo(tv._id)
        .subscribe( (resp: any) => {
            if ( resp.ok ){
              Swal.fire(
                'Borrado!',
                `${tv.nombre}, ha sido borrado`,
                'success'
              );
              this.cargarTiposVehiculos();
            } else {
              Swal.fire(
                'Error!',
                `Error al borrar ${tv.nombre}<br/>
                ${resp.mensaje}`,
                'error'
              );
            }
        });
      }
    });



  }


  crearTipoVehiculo() {
    this.router.navigate(['/tipovehiculo', 'nuevo']);
  }


  cargarTiposVehiculos() {

    this.tipoVehiculoService.getTipoVehiculos()
    .subscribe( (resp: any) => {
      this.tipoVehiculos = resp.tipoVehiculos;
    });


  }

}
