import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cptheme',
  templateUrl: './cptheme.component.html',
  styleUrls: ['./cptheme.component.css']
})
export class CpthemeComponent implements AfterViewInit {

  @ViewChild('name')
  private elName ={} as ElementRef;
  @ViewChild('city')
  private elCity={} as ElementRef;

  ngAfterViewInit(){
    this.elName.nativeElement.style.backgroundColor='pink';
    this.elName.nativeElement.style.color='green';
    this.elCity.nativeElement.style.backgroundColor='pink';
    this.elCity.nativeElement.style.color='blue';
  }

}
