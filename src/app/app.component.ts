import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 1;
  public name2 = 999;

  public changeName() {
    this.name = ++this.name;
  }

  public changeName2() {
    this.name2 = --this.name2;
  }
}
