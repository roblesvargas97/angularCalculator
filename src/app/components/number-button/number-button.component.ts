import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.scss']
})
export class NumberButtonComponent implements OnInit {

  @Input() number:number = 0;

  constructor(

    private storeService: StoreService

  ) {

   }

  ngOnInit(): void {
  }

  onAddNumber(number:number){
   this.storeService.addNumber(number);
  }

}
