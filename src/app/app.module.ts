import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number/number-parent/number-parent.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { StopwatchParentComponent } from './stopwatch/stopwatch-parent/stopwatch-parent.component';
import { CpcolorParentComponent } from './cpcolor-parent/cpcolor-parent.component';
import { CpColorDirective } from './cpcolor-parent/cpcolor.directive';
import { CpthemeComponent } from './cptheme/cptheme.component';
import { UiElementComponent } from './ui-element/ui-element.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberParentComponent,
    StopwatchComponent,
    StopwatchParentComponent,
    CpcolorParentComponent,
    CpColorDirective,
    CpthemeComponent,
    UiElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
