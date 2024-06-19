import { Component, EventEmitter, Output } from '@angular/core';
import { OneComponent } from './one/one.component';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [OneComponent],
  template: `
  <div>Test</div>
  <app-one (testtt)="handleTest($event)"></app-one>
  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  handleTest = (data: number)=>{
    console.log(data)
  }
}
