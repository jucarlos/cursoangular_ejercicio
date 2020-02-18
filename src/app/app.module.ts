import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { DatosUsuarioComponent } from './components/usuario/datos-usuario.component';
import { RegisterComponent } from './components/usuario/register.component';
import { ModalComponent } from './components/modal/modal.component';
import { PagesModule } from './pages/pages.module';
import { PipesModule } from './pipes/pipes.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DatosUsuarioComponent,
    RegisterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    PagesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
