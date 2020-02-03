import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from '../../models/vehiculo';
import { TipoVehiculo } from '../../models/tipo-vehiculo';
import { TipoVehiculoService } from '../../services/tipo-vehiculo.service';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { VehiculosClienteService } from '../../services/vehiculos-cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiculo-cliente',
  templateUrl: './vehiculo-cliente.component.html',
  styles: []
})
export class VehiculoClienteComponent implements OnInit {

  clienteId ;
  cliente: Cliente;
  tituloCabecera = 'Nuevo vehículo ';
  tituloBoton = 'Crear';
  tipoVehiculoTemp = new TipoVehiculo('');

  vehiculo: Vehiculo = new Vehiculo('', '', '', this.tipoVehiculoTemp );

  tipoVehiculos: TipoVehiculo[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private vehiculosClienteService: VehiculosClienteService,
              private clienteService: ClienteService,
              private tipoVehiculoService: TipoVehiculoService) { }

  ngOnInit() {
    this.cargarTiposVehiculos();
    this.cargarDatosCliente();
  }

  cargarDatosCliente() {

    this.activatedRoute.params.subscribe( (params: any) => {

      const ope = params['ope'];
      const id =  params['id'];

      if ( ope === 'nuevo' ) {
        this.clienteId = id;
        this.clienteService.getCliente( id )
        .subscribe( (resp: any) => {
          this.cliente = resp.cliente;
          this.tituloBoton = 'Crear';
          this.tituloCabecera = 'Nuevo vehículo para ' + this.cliente.nombre;
        });
      } else {
        this.tituloBoton = 'Actualizar';
        console.log( 'Estamos editando ');
        this.vehiculosClienteService.obtenerVehiculo( id )
        .subscribe( (resp: any) => {
          this.vehiculo = resp.vehiculo;
          this.clienteId = this.vehiculo.cliente;
        });

      }
    });

  }

  guardarVehiculo() {
    // console.log('Guardar vehículo');
    // console.log( this.vehiculo );
    this.vehiculo.cliente = this.cliente;
    this.vehiculosClienteService.guardarVehiculoCliente( this.vehiculo )
    .subscribe( (resp: any) => {
      // console.log( resp );
      if ( resp.ok ) {
        Swal.fire('Vehículo guardado', resp.mensaje, 'success');
      }
      this.volver();
    });

  }

  cargarTiposVehiculos() {

    this.tipoVehiculoService.getTipoVehiculos()
    .subscribe( (resp: any) => {
      this.tipoVehiculos = resp.tipoVehiculos;
    });

  }

  cambioTipoVehiculo( id ) {

    console.log( id );
  }


 

  volver() {
    this.router.navigate(['/clientes/detalle', this.clienteId ]);
  }

}
