import { Component, OnInit, ViewChild } from '@angular/core';
import { CpColorDirective } from './cpcolor.directive';

@Component({
  selector: 'app-cpcolor-parent',
  templateUrl: './cpcolor-parent.component.html',
  styleUrls: ['./cpcolor-parent.component.css']
})
export class CpcolorParentComponent implements OnInit {

  @ViewChild(CpColorDirective)
  private cpColorDirective = {} as CpColorDirective;
  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
