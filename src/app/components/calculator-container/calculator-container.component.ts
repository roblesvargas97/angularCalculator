import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.scss']
})
export class CalculatorContainerComponent implements OnInit {

  numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
  screenResult: number = 0;

  constructor(
    private storeService : StoreService,
  ) {




  }



  ngOnInit(): void {
    this.storeService.number$.subscribe(element => {
      this.screenResult = element;
    })

  }





}
