import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private operand1 = new BehaviorSubject<number>(0);
  private operand2 = new BehaviorSubject<number>(0);
  private onReset = new BehaviorSubject <boolean>(false);
  private onOperation = new BehaviorSubject<boolean>(false);
  private operandBackUp = new BehaviorSubject <number>(0);
  private lastOperation = new BehaviorSubject <string>('');
  private counterOperations:number = 0;
  operand1$ = this.operand1.asObservable();
  operand2$ = this.operand2.asObservable();
  lastOperation$ = this.lastOperation.asObservable();

  constructor() { }


  setOperand1(number:number){
    if(this.getOnOperation() === false && this.getReset() ===false ){
      this.operand1.next(Number(this.getOperand1().toString() + number.toString() ));
      // console.log(this.getOperand1());
    }
  }

  setOperand2(number:number){

    if(this.getOnOperation() === true ){
      this.operand2.next(Number(this.getOperand2().toString() + number.toString() ));
      // console.log(this.getOperand2());
    }
  }

  setOnOperation(value:boolean){
    this.onOperation.next(value);
    // console.log(this.getOnOperation());
  }

  setOnReset(value:boolean){
    this.onReset.next(value);
  }

  setCounterOperations(){
    this.counterOperations++;
  }

  setOperandBackup(value:number){
    this.operandBackUp.next(value);
  }

  getOperand1(){
    return this.operand1.getValue();
  }

  getOperand2(){
    return this.operand2.getValue();
  }

  getOnOperation(){
    return this.onOperation.getValue();
  }

  getOperandBackup(){
    return this.operandBackUp.getValue();
  }

  getReset(){
    return this.onReset.getValue();
  }

  onSustraction(){
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('-');

    if(this.counterOperations>=2){
      this.operand1.next(this.getOperand1() - this.getOperand2())
      this.operand2.next(0);
    }
  }

  onSum(){
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('+');

    if(this.counterOperations>=2){
      this.operand1.next(this.getOperand1() + this.getOperand2())
      this.operand2.next(0);
    }
  }

  onMultiplication(){
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('/');

    if(this.counterOperations>=2){
      this.operand1.next(this.getOperand1() * this.getOperand2())
      this.operand2.next(0);
    }
  }

  onDivision(){
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('x');

    if(this.counterOperations>=2){
      this.operand1.next(this.getOperand1() / this.getOperand2())
      this.operand2.next(0);
    }
  }





}
