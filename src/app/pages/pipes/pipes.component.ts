import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  miUperCase = 'mi primer pipe';
  miLowerCase = 'Todo en Minúsculas';
  cadenaTexto = 'Cadena de texto';
  e = Math.E;
  precio = 356.45;

  fecha = new Date();

  constructor() {}

  ngOnInit() {
  }

}
