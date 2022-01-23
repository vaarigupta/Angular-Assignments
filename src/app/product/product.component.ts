import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  IsClicked:boolean = false;
  randomColor:string ="";
 // count:number = 0;
  nums:any= [];
  bgcolor:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  ToggleDetails()
  {
    this.IsClicked = !this.IsClicked;
   //this.count++;
    this.randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.nums.push(this.randomColor);
  }

}
