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
    console.log("1: constructor")
  }
  ngOnInit(): void {
    console.log("1: ngOnInit")
  }
  ngOnChanges(): void {
    console.log("1: ngOnChanges")
  }
  ngOnDestroy(): void {
    console.log("1: ngOnDestroy")
  }
  ngDoCheck(){
    console.log("1: ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("1: ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("1: ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("1: ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("1: ngAfterViewChecked")
  }
}
