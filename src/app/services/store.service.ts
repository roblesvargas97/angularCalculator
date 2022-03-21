import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private number = new BehaviorSubject <number> (0);


  number$ = this.number.asObservable();

  constructor() { }

  addNumber(number:number){
    this.number.next(number);

  }

  getNumber(){
    return this.number.getValue();
  }




}
