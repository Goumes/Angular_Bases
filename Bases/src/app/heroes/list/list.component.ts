import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private _superheroes: Array<string> = ['Superman', 'Hulk', 'Thor', 'Spiderman'];
  private _superheroeBorrado: string = "";

  public get superheroeBorrado(): string {
    return this._superheroeBorrado;
  }
  public set superheroeBorrado(value: string) {
    this._superheroeBorrado = value;
  }

  public get superheroes(): Array<string> {
    return this._superheroes;
  }
  public set superheroes(value: Array<string>) {
    this._superheroes = value;
  }

  public borrarSuperheroe(): void{
    this.superheroeBorrado = String(this.superheroes.pop());
  }
}