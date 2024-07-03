import { Component, EventEmitter, Output } from '@angular/core';
import { OneComponent } from './one/one.component';
import { SelectorComponent } from './selector/selector.component';
import { WrapperCounterComponent } from './wrapper-counter/wrapper-counter.component';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [OneComponent, SelectorComponent,WrapperCounterComponent],
  template: `
  <app-wrapper-counter></app-wrapper-counter>
  <div>Test</div>
  <app-one (testtt)="handleTest($event)"></app-one>
  <div class="menu-item"></div>
  <div class="menu-item"></div>
  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  handleTest = (data: number)=>{
    console.log(data)
  }
}
