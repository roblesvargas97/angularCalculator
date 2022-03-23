import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.scss']
})
export class OperationButtonComponent implements OnInit {

  @Input() operation: string = '';

  constructor(
    private storeService : StoreService
  ) { }

  selectOperation() {
    switch (this.operation) {
      case '+':
        return(this.storeService.onSum());

      case '-':
        return( this.storeService.onSustraction());

      case '/':
        return( this.storeService.onDivision());

      case 'x':
        return( this.storeService.onMultiplication());

      default:
        break;
    }
  }

  ngOnInit(): void {
  }



}
