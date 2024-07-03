import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperCounterComponent } from './wrapper-counter.component';

describe('WrapperCounterComponent', () => {
  let component: WrapperCounterComponent;
  let fixture: ComponentFixture<WrapperCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
