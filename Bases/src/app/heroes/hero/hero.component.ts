import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _nombre: string = "Ironman";
  private _edad: number = 45;

  public get edad(): number {
    return this._edad;
  }
  public set edad(value: number) {
    this._edad = value;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get nombreEnMayusculas(): string{
    return this._nombre.toUpperCase()
  }

  public dimeDescripcion(): string{
    return `El ${this._nombre} tiene  ${this._edad} años.`;
  }

  public cambiarNombre(): void{
    let nuevoNombre:string | null = String(prompt("Dime el nuevo nombre"));
    this._nombre = nuevoNombre;
  }

  public cambiarEdad(): void{
    let nuevaEdad:number = Number(prompt("Dime la nueva edad"));

    if (!isNaN(nuevaEdad)){
      this._edad = nuevaEdad;
    }
    else{
      alert("Introduzca un número!!!");
    }
  }

  public reset(): void{
    this._nombre = "Ironman";
    this._edad = 45;
  }
}
