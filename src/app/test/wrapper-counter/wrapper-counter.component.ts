import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
@Component({
  selector: 'app-wrapper-counter',
  standalone: true,
  imports: [CounterComponent],
  template: `
  <app-counter [externalNum]="num"></app-counter>
  <button (click)="handleChangeExternal()"> change external</button>
  `,
  styleUrl: './wrapper-counter.component.css'
})
export class WrapperCounterComponent {
  num : number = 0
  handleChangeExternal(){
    this.num+=1;
  }
  constructor(){
    console.log("Parent: constructor")
  }
  ngOnInit(): void {
    console.log("Parent: ngOnInit")
  }
  ngOnChanges(): void {
    console.log("Parent: ngOnChanges")
  }
  ngOnDestroy(): void {
    console.log("Parent: ngOnDestroy")
  }
  ngDoCheck(){
    console.log("Parent: ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("Parent: ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("Parent: ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("Parent: ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("Parent: ngAfterViewChecked")
  }
}
