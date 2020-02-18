import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tema } from '../../models/tema';

@Component({
  selector: 'app-temario-tarjeta',
  templateUrl: './temario-tarjeta.component.html',
  styleUrls: ['./temario-tarjeta.component.css']
})
export class TemarioTarjetaComponent implements OnInit {


  @Input() i ;
  @Input() temaTarjeta;

  @Output() cambiaMeGusta: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  meGusta() {

    this.cambiaMeGusta.emit(1);

  }


}
