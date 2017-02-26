import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<button (click)="sayHi()">Say Hi</button>
            <div *ngIf ="displayMyName">
              <h1>Hello world, {{name}}</h1>
            </div>`,
})
export class UserComponent  {
name:String;
displayMyName:boolean;
constructor()
{
  this.displayMyName = false;
  this.name = "fan";

}
sayHi()
{
  if(this.displayMyName)
  {
    this.displayMyName = false;
  }
  else
  {
    this.displayMyName = true;
  }
}
}
