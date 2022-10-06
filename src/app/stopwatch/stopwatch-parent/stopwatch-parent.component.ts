import { Component, ViewChild } from '@angular/core';
import { StopwatchComponent } from '../stopwatch.component';

@Component({
  selector: 'app-stopwatch-parent',
  templateUrl: './stopwatch-parent.component.html',
  styleUrls: ['./stopwatch-parent.component.css']
})
export class StopwatchParentComponent {

  @ViewChild(StopwatchComponent)
  private stopwatchComponent = {} as StopwatchComponent;
  startStopwatch() {
    this.stopwatchComponent.start();
  }
  stopStopwatch() {
    this.stopwatchComponent.stop();
  }
}



