import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  @Output() testtt = new EventEmitter();
  Emitt(){
    console.log("click")
    this.testtt.emit(123123123)
  }
}
