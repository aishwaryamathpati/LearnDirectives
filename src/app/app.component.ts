import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnDirectives';

data:any={
  username:"Aish",
  password:"123"
}
//1
numbers:any=[1,3,4,6,7];

students:any=[
  {
    id:1,
    name:'Aish',
    age:23
  },


{
  id:2,
  name:'neha',
  age:25
}
]
color="Red";

//Attribute Directives
isHighlight=false;
hightlightonoff(){
  this.isHighlight= !this.isHighlight;
}
//ngStyle
fontSize = '30px';
increase(){
  this.fontSize =parseInt(this.fontSize) +2 +'px';
}
decrease(){
  this.fontSize =parseInt(this.fontSize)  -2 +'px';
}
}





  

