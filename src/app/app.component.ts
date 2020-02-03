import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'ejercicio';

  constructor( private router: Router,
               private title: Title) {

  this.router.events
  .pipe (
    filter ( evento => evento instanceof ActivationEnd),
    filter ( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
    map( ( evento: ActivationEnd ) => {
      return evento.snapshot.data;
    } )
  )
  .subscribe( evento => {
    // console.log( evento);
    this.title.setTitle( evento.titulo );
  });
  
}

}
