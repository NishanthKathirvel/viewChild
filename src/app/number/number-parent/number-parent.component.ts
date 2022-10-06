import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberComponent } from '../number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css']
})
export class NumberParentComponent implements OnInit {

  @ViewChild(NumberComponent)
  
  private numberComponent = {} as NumberComponent;
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
