import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TipoVehiculoComponent } from './pages/tipo-vehiculo/tipo-vehiculo.component';
import { EdicionTipoVehiculoComponent } from './pages/tipo-vehiculo/edicion-tipo-vehiculo.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteDetalleComponent } from './pages/clientes/cliente-detalle.component';
import { VehiculoClienteComponent } from './pages/clientes/vehiculo-cliente.component';
import { RegisterComponent } from './components/usuario/register.component';
import { TallerComponent } from './pages/taller/taller.component';
import { LoginGuard } from './guards/login.guard';
import { FormularioHtmlComponent } from './pages/formularios/formulario-html.component';
import { FormularioTsComponent } from './pages/formularios/formulario-ts.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';



const routes: Routes = [
  { path: 'temario', component: TemarioComponent, data: { titulo: 'Temario' }  },
  { path: 'home', component: HomeComponent, data: { titulo: 'Home' }  },
  { path: 'directivas', component: DirectivasComponent, data: { titulo: 'Directivas' } },
  { path: 'registro', component: RegisterComponent , data: { titulo: 'Registro' } },
  { path: 'pipes', component: PipesComponent, data: { titulo: 'Pipes' }  },
  { path: 'tipovehiculos', component: TipoVehiculoComponent, data: { titulo: 'Tipos de Vehículos' }  },
  { path: 'tipovehiculo/:id', component: EdicionTipoVehiculoComponent, data: { titulo: 'Editanto Vehículos' }  },
  { path: 'clientes', component: ClientesComponent ,  data: { titulo: 'Clientes' }},
  { path: 'clientes/detalle/:id', component: ClienteDetalleComponent, data: { titulo: 'Editando Clientes' }  },
  { path: 'vehiculo/detalle/:ope/:id', component: VehiculoClienteComponent, data: { titulo: 'Vehiculo de Clientes' }  },
  { path: 'taller', component: TallerComponent, canActivate: [ LoginGuard ],  data: { titulo: 'Operaciones de taller' }  },
  { path: 'formulario-html', component: FormularioHtmlComponent,  data: { titulo: 'Formulario Html' }  },
  { path: 'formulario-ts', component: FormularioTsComponent, data: { titulo: 'Formulario TS' }  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
