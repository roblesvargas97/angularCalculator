import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private operand1 = new BehaviorSubject<string>('0');
  private operand2 = new BehaviorSubject<string>('0');
  private onOperation = new BehaviorSubject<boolean>(false);
  private operandBackUp = new BehaviorSubject <string>('0');
  private lastOperation = new BehaviorSubject <string>('');
  private counterOperations:number = 0;
  operand1$ = this.operand1.asObservable();
  operand2$ = this.operand2.asObservable();
  lastOperation$ = this.lastOperation.asObservable();

  constructor() { }


  setOperand1(number:string){
    if(this.getOnOperation() === false ){
      if(this.getOperand1().charAt(0) === '0'){
        const newValue =  this.getOperand1().slice(1);
        this.operand1.next(newValue);
      }
      this.operand1.next(this.getOperand1() + number );
      // console.log(this.getOperand1());
    }
  }

  setOperand2(number:string){

    if(this.getOnOperation() === true ){
      if(this.getOperand2().charAt(0) === '0'){
        const newValue =  this.getOperand2().slice(1);
        this.operand2.next(newValue);
      }
      this.operand2.next(this.getOperand2() + number );
      // console.log(this.getOperand2());
    }
  }

  setOnOperation(value:boolean){
    this.onOperation.next(value);
    // console.log(this.getOnOperation());
  }


  setCounterOperations(){
    this.counterOperations++;
  }

  resetCounterOperations(){
    this.counterOperations = 0;
  }

  setOperandBackup(value:string){
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


  onSustraction(){
    this.verifyDecimalPoint();
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('-');
    if(this.counterOperations>=2){
      this.operand1.next((Number(this.getOperand1()) - Number(this.getOperand2())).toString())
      this.operand2.next('0');
    }
  }

  onSum(){
    this.verifyDecimalPoint();
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('+');
    if(this.counterOperations>=2){
      this.operand1.next((Number(this.getOperand1()) + Number(this.getOperand2())).toString())
      this.operand2.next('0');
    }
  }

  onMultiplication(){
    this.verifyDecimalPoint();
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('x');

    if(this.counterOperations>=2){
      if(this.getOperand2() !=='0' ){
        this.operand1.next((Number(this.getOperand1()) * Number(this.getOperand2())).toString())
        this.operand2.next('0');
      }
    }
  }

  onDivision(){
    this.verifyDecimalPoint();
    this.setOnOperation(true);
    this.setCounterOperations();
    this.lastOperation.next('/');

    if(this.counterOperations>=2){
      this.operand1.next((Number(this.getOperand1()) / Number(this.getOperand2())).toString())
      this.operand2.next('0');
    }
  }

  onResetValues(){
    this.setOnOperation(false);
    this.resetCounterOperations();
    this.operand1.next('0');
    this.operand2.next('0');
  }

  addPoint(){
    if(this.getOnOperation() === false ){
      const valueToString = this.getOperand1();
      if(!(valueToString.charAt(valueToString.length - 1)=== '.')){
        const newValue = valueToString + '.';
        this.operand1.next(newValue);
      }
    }
    if(this.getOnOperation() === true){
      const valueToString = this.getOperand2();
      if(!(valueToString.charAt(valueToString.length - 1)=== '.')){
        const newValue = valueToString + '.';
        this.operand2.next(newValue);
      }
    }
  }


 verifyDecimalPoint(){
  if((this.getOperand1().charAt(this.getOperand1().length-1) === '.')){
    const newValue = this.getOperand1().slice(0 , this.getOperand1().length-1);
    this.operand1.next(newValue);
  }
  if((this.getOperand2().charAt(this.getOperand2().length-1) === '.')){
    const newValue = this.getOperand2().slice(0 , this.getOperand2().length-1);
    this.operand2.next(newValue);
  }
 }


}
