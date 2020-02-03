import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styles: []
})
export class ClienteDetalleComponent implements OnInit {

  tituloBoton = 'Crear';
  cliente: Cliente = new Cliente('', '', '');
  idCliente;

  imagenSubir: File;
  imagenTemp: any;


  constructor(
    public clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
     this.cargarCliente();
  }

  guardarCliente() {

    this.clienteService.guardarCliente( this.cliente )
    .subscribe( (resp: any) => {
       if ( resp.ok ) {
        Swal.fire('Guardado', `${resp.cliente.nombre}, ha sido guardado correctamente`, 'success');
        this.router.navigate(['/clientes']);
       }
    });
  }

  cargarCliente() {

    this.activatedRoute.params.subscribe( (params: any) => {
      const id =  params['id'];
      this.idCliente = id;

      if ( id !== 'nuevo') {
          this.tituloBoton = 'Actualizar';
          this.clienteService.getCliente( id )
          .subscribe( (resp: any) => {
           this.cliente = resp.cliente;
          });
        }
    });
  }

  seleccionImagen( archivo: File  ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf ( 'image') < 0 ){
      Swal.fire('Sólo imágenes', 'El archivo no es una imágen válida', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;

  }
  cambiarImagen() {

    this.clienteService.cambiarImagen( this.imagenSubir, this.cliente._id )
    .then ( (resp: any ) => {
      if ( resp.ok ) {
        Swal.fire('Imagen actualizada', resp.mensaje, 'success');
        this.volver();
      }
    }).catch ( ( error ) => {
      Swal.fire('Error', 'Ha habido un error al actualizar la imagen', 'error');
    });

  }


  volver() {
    this.router.navigate(['/clientes']);
  }



}
