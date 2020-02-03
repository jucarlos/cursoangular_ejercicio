import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TipoVehiculoComponent } from './pages/tipo-vehiculo/tipo-vehiculo.component';
import { EdicionTipoVehiculoComponent } from './pages/tipo-vehiculo/edicion-tipo-vehiculo.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteDetalleComponent } from './pages/clientes/cliente-detalle.component';
import { VehiculoClienteComponent } from './pages/clientes/vehiculo-cliente.component';
import { LoginComponent } from './components/usuario/login.component';
import { RegisterComponent } from './components/usuario/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent , data: { titulo: 'Inicio' } },
  { path: 'login', component: LoginComponent , data: { titulo: 'Login' } },
  { path: 'registro', component: RegisterComponent , data: { titulo: 'Registro' } },
  { path: 'temario', component: TemarioComponent, data: { titulo: 'Temario' }  },
  { path: 'directivas', component: DirectivasComponent, data: { titulo: 'Directivas' } },
  { path: 'pipes', component: PipesComponent, data: { titulo: 'Pipes' }  },
  { path: 'tipovehiculos', component: TipoVehiculoComponent, data: { titulo: 'Tipos de Vehículos' }  },
  { path: 'tipovehiculo/:id', component: EdicionTipoVehiculoComponent, data: { titulo: 'Editanto Vehículos' }  },
  { path: 'clientes', component: ClientesComponent ,  data: { titulo: 'Clientes' }},
  { path: 'clientes/detalle/:id', component: ClienteDetalleComponent, data: { titulo: 'Editando Clientes' }  },
  { path: 'vehiculo/detalle/:ope/:id', component: VehiculoClienteComponent, data: { titulo: 'Vehiculo de Clientes' }  },

  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
