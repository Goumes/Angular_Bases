import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>CounterComponent</h1>
   <div class="containerCounter">
    <h2>{{counter}}</h2>
    <button (click)="changeCounter(-1)" id="idBtnSubtractCounter">-</button>
    <button (click)="counter =10" id="idBtnReset">Reset</button>
    <button (click)="changeCounter(1)" id="idBtnAddCounter">+</button>
  </div>
  `,
  styles: `
  button{
    font-size: 25px;
  }

  button:hover{
      background-color: white;
  }

  .containerCounter{
      width: fit-content;
      border-radius: 10px;
      background-color: grey;
      text-align: center;
  }

  .containerCounter > h2{
      color: white;
  }`
})
export class CounterComponent {
  public counter: number = 10;

  changeCounter(value: number){
    this.counter = this.counter + value;
  }
}
