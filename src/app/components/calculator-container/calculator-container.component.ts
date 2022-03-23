import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.scss']
})
export class CalculatorContainerComponent implements OnInit {

  numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
  operations: string[] = ['+' , '-' , '/' , 'x'];
  operand1: number = 0;
  operand2: number = 0;
  lastOperation: string = '';

  constructor(
    private storeService : StoreService,
  ) {

  }


  ngOnInit(): void {
    this.storeService.operand1$.subscribe(element => {
      this.operand1 = element;
    })

    this.storeService.operand2$.subscribe(element => {
      this.operand2 = element;
    })

    this.storeService.lastOperation$.subscribe(element => {
      this.lastOperation = element;
    })
  }


  onResult(){
      switch (this.lastOperation) {
        case '+':
          return(this.storeService.onSum());

        case '-':
          return( this.storeService.onSustraction());

        case '/':
          return( this.storeService.onDivision());

        case 'x':
          return(this.storeService.onMultiplication());


        default:
          break;
      }
  }

  onReset(){
    this.storeService.getReset();
  }


}
