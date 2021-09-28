import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {

  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: number;
  @Input() color!: string;
  @Input() isIncrease!: boolean;
  @Input() isCurrency!: boolean;
  @Input() duration!: string;
  @Input() percentValue!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
