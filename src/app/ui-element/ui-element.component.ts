import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CpcolorParentComponent } from '../cpcolor-parent/cpcolor-parent.component';
import { CpColorDirective } from '../cpcolor-parent/cpcolor.directive';
import { NumberComponent } from '../number/number.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.component.html',
  styleUrls: ['./ui-element.component.css']
})
export class UiElementComponent implements AfterViewInit {

  @ViewChild(NumberComponent)
  private numberComponent = {} as NumberComponent;
  @ViewChild(StopwatchComponent)
  private stopwatchComponent = {} as StopwatchComponent;
  @ViewChild(CpColorDirective)
  private cpColorDirective = {} as CpColorDirective;
  @ViewChild('title')
  private elTitle = {} as ElementRef;


  ngAfterViewInit() {
    this.elTitle.nativeElement.style.background = 'yellow';
    this.elTitle.nativeElement.style.color = 'black';
  }
  

  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }
  startStopwatch() {
    this.stopwatchComponent.start();
  }
  stopStopwatch() {
    this.stopwatchComponent.stop();
  }
  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }
}
