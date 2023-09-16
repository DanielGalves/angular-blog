import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoCover:string ="";
  @Input()
  titleSmallCard:string = "";
  @Input()
  decriptionSmallcard:string ="";
  

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
