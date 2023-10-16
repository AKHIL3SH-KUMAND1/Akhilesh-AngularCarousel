import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'mythirdproject';
  url:string = 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1600';
  state:number = 0
  images = [
    'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ]
  constructor(){}

  prev():void{
    this.state = (this.state - 1 + 5)%5;
    this.url = this.images[this.state]
  }

  next():void{
    this.state = (this.state + 1)%5;
    this.url = this.images[this.state];
  }

  imageChange(event:any):void{
    let idValue:string = event.target.id;
    let id:number = +idValue.slice(5);
    this.state = id;
    this.url = this.images[this.state];
  }
}
