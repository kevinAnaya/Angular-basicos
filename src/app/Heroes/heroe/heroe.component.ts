import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  nombre : string = 'Ironman';
  edad   : number = 45;

  get capitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre = ():string => `${this.nombre} - ${this.edad}`;

  cambiarNombre = (): string => this.nombre = 'Spiderman';

  cambiarEdad = (): number => this.edad = 30; 

}
