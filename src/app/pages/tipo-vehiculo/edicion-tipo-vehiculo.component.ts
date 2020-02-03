import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoVehiculo } from '../../models/tipo-vehiculo';

import Swal from 'sweetalert2';
import { TipoVehiculoService } from '../../services/tipo-vehiculo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-edicion-tipo-vehiculo',
  templateUrl: './edicion-tipo-vehiculo.component.html',
  styles: []
})
export class EdicionTipoVehiculoComponent implements OnInit {

  titulo = '';
  tituloBoton = '';
  
  tipoVehiculo = new TipoVehiculo('', '');


  constructor(
    private tipoVehiculoService: TipoVehiculoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: any) => {

      const id = params['id'];

      if ( id === 'nuevo') {
        this.titulo = 'Nuevo Tipo de Vehículo';
        this.tituloBoton = 'Guardar';
      } else {
        this.tituloBoton = 'Actualizar';
        this.cargarTipoVehiculo( id );
      }

    });
  }


  cargarTipoVehiculo(id: string ) {


    this.tipoVehiculoService.getTipoVehiculo( id )
    .subscribe( (resp: any) => {
      this.tipoVehiculo = resp.tipoVehiculo;
      this.titulo = `Editando ${this.tipoVehiculo.nombre}`;
    });

  }

  guardarTipoVehiculo( f: NgForm) {

  
    this.tipoVehiculoService.guardarTipoVehiculo( this.tipoVehiculo)
    .subscribe( (resp: any) => {
      if ( resp.ok ) {
        Swal.fire('Guardado', `${resp.tipoVehiculo.nombre}, ha sido guardado correctamente`, 'success');
        this.router.navigate(['/tipovehiculos']);
      }
    });

  }






}
