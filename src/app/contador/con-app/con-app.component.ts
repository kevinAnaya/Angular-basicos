import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-con-app',
  templateUrl: './con-app.component.html',
  styleUrls: ['./con-app.component.css']
})
export class ConAppComponent {

  title:string = 'Contador app';
  numero:number = 0;
  base:number = 5;

  acomular = () => this.base += 5;
  acomularR = () => this.base -= 5;

}
