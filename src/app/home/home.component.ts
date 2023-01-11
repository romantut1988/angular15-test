import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  headername = 'Angular 15';

  salary = 10;
  isdisabled = false;

  colorname = 'green';
  font = '40px';
  classname = 'headclass';
  stylevalue = { color: 'green', 'font-size': '30px' };

  colors = ['green', 'red', 'yellow', 'black', 'white'];

  Functionclick(name: string) {
    alert(name);
  }
}
