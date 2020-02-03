import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alreves'
})

// pipe que saca el texto al revés las veces que nos digan
export class AlrevesPipe implements PipeTransform {

  transform(value: string, alreves: boolean): string {


    let texto = value;

    if ( alreves  ) {
        texto = '';
        for (let i = value.length - 1; i >= 0; i-- ) {
        texto = texto + value[i];
      }
    }

    return texto;

  }

}
