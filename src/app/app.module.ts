import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { DirectivasComponent } from './pages/directivas/directivas.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { TemarioTarjetaComponent } from './pages/temario/temario-tarjeta.component';
import { PipesComponent } from './pages/pipes/pipes.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AlrevesPipe } from './pipes/alreves.pipe';
import { TipoVehiculoComponent } from './pages/tipo-vehiculo/tipo-vehiculo.component';
import { EdicionTipoVehiculoComponent } from './pages/tipo-vehiculo/edicion-tipo-vehiculo.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteDetalleComponent } from './pages/clientes/cliente-detalle.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { VehiculosClienteComponent } from './pages/clientes/vehiculos-cliente.component';
import { VehiculoClienteComponent } from './pages/clientes/vehiculo-cliente.component';

import { DatosUsuarioComponent } from './components/usuario/datos-usuario.component';
import { RegisterComponent } from './components/usuario/register.component';
import { ModalComponent } from './components/modal/modal.component';
import { TallerComponent } from './pages/taller/taller.component';
import { FormularioHtmlComponent } from './pages/formularios/formulario-html.component';
import { FormularioTsComponent } from './pages/formularios/formulario-ts.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DirectivasComponent,
    TemarioComponent,
    TemarioTarjetaComponent,
    PipesComponent,
    AlrevesPipe,
    TipoVehiculoComponent,
    EdicionTipoVehiculoComponent,
    ClientesComponent,
    ClienteDetalleComponent,
    ImagenPipe,
    VehiculosClienteComponent,
    VehiculoClienteComponent,
    DatosUsuarioComponent,
    RegisterComponent,
    ModalComponent,
    TallerComponent,
    FormularioHtmlComponent,
    FormularioTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
