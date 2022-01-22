import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  IsClicked:boolean = false;
  count:number = 0;
  nums: number[] = [];
  bgcolor:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  ToggleDetails()
  {
    this.IsClicked = !this.IsClicked;
    this.count++;
    // this.bgcolor = this.count>=5?'blue':'transparent';
    this.nums.push(this.count);
  }

}
