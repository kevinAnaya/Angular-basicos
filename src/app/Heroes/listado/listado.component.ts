import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes : string[] = ['Spiderman' , 'Ironman' , 'Hulk' , 'Thor' , 'Linterna Verde'];
  heroeBorrado : string = '';
  
  borrarHeroe = () => {
    this.heroeBorrado = this.heroes.shift();
    
    
  }
}
