import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  username: string="";
  IsDisabled:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  
  OnEnterUsername(event:Event)
  {
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username.length!=0)
    {
      this.IsDisabled = false;
      
    }
  }
  

}
