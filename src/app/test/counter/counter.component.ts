import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div>
      internal change: {{internalNum}}
    </div>
    <button (click)="changeInternalNumber()">change internal</button>
    <div>
      external change : {{externalNum}}
    </div>
  `,
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() externalNum ?: number
  internalNum:number = 0;
  changeInternalNumber(){
    this.internalNum +=1;
  }
  constructor(){
    console.log("2: constructor")
  }
  ngOnInit(): void {
    console.log("2: ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("2: ngOncChanges")
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log("2: ngOnDestroy")
  }
  ngDoCheck(){
    console.log("2: ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("2: ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("2: ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("2: ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("2: ngAfterViewChecked")
  }
}
