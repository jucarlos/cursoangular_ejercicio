import { Component, OnInit } from '@angular/core';
import { Tema } from '../../models/tema';
// import { TEMARIO } from '../../data/datostemario.json';
import { TemarioService } from '../../services/temario.service';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {


  // temario: Tema[] = [
  //   {
  //     titulo: 'TypeScript',
  //     contenido: 'Introducción a TypeScript. La idea es ver como nos ayuda TypeScript cuando estamos programando'
  // },
  // {
  //     titulo: 'Componentes',
  //     contenido: 'Creación de componentes y entendiendo la estructura'
  // },
  // {
  //     titulo: 'Directivas estructurales',
  //     contenido: '¿Qué es esto y para que nos sirve'
  // },
  // {
  //     titulo: 'Pipes',
  //     contenido: 'Los pipes se utilizan para cambiar la forma en la que se presentan los datos. No los cambian'
  // }

  // ];


  temario: Tema[] = [];

  meGustan = 0;

  constructor(public temaService: TemarioService) { }

  ngOnInit() {
    // this.temario = TEMARIO;
    // this.temario = this.temaService.getTemario();

    // Nos suscribimos
    this.temaService.getTemarioAsync()
    .subscribe( data => {
      this.temario = data;
    });
  }

  cambiaMegusta( evento ) {
    this.meGustan++;
  }



}
