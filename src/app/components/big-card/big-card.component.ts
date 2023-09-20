import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
  @Input()
  photoCover:string = "";
  @Input()
  decriptionBigCard:string = "";
  @Input()
  titleBigCard:string ="";
  @Input()
  id:string = "0";

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
