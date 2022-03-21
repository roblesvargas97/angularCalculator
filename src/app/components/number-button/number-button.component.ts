import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.scss']
})
export class NumberButtonComponent implements OnInit {

  @Input() number:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
