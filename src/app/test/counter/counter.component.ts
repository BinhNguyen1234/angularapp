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
    console.log("children: constructor")
  }
  ngOnInit(): void {
    console.log("children: ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("children: ngOncChanges")
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log("children: ngOnDestroy")
  }
  ngDoCheck(){
    console.log("children: ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("children: ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("children: ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("children: ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("children: ngAfterViewChecked")
  }
}
