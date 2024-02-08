import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title: string = 'Bases';

  get getTitle(): string{
    return this.title;
  }

}
