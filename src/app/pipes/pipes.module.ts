import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlrevesPipe } from './alreves.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [
    AlrevesPipe,
    ImagenPipe
  ],
  exports: [
    AlrevesPipe,
    ImagenPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
