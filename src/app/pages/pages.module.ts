import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './directivas/directivas.component';
import { TemarioComponent } from './temario/temario.component';
import { TemarioTarjetaComponent } from './temario/temario-tarjeta.component';
import { TipoVehiculoComponent } from './tipo-vehiculo/tipo-vehiculo.component';
import { ClienteDetalleComponent } from './clientes/cliente-detalle.component';
import { PipesComponent } from './pipes/pipes.component';
import { EdicionTipoVehiculoComponent } from './tipo-vehiculo/edicion-tipo-vehiculo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VehiculosClienteComponent } from './clientes/vehiculos-cliente.component';
import { VehiculoClienteComponent } from './clientes/vehiculo-cliente.component';
import { TallerComponent } from './taller/taller.component';
import { FormularioHtmlComponent } from './formularios/formulario-html.component';
import { FormularioTsComponent } from './formularios/formulario-ts.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DirectivasComponent,
    TemarioComponent,
    TemarioTarjetaComponent,
    PipesComponent,
    TipoVehiculoComponent,
    EdicionTipoVehiculoComponent,
    ClientesComponent,
    ClienteDetalleComponent,
    VehiculosClienteComponent,
    VehiculoClienteComponent,
    TallerComponent,
    FormularioHtmlComponent,
    FormularioTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    CommonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  // Solamente si se utiliza alguno
  ],
})
export class PagesModule { }
