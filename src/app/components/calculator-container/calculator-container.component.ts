import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.scss']
})
export class CalculatorContainerComponent implements OnInit {

  numbers: number[] = [0,1,2,3,4,5,6,7,8,9];

  constructor() { }



  ngOnInit(): void {
  }

}
