import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input('username') name:string = 'laujorpan';
  @Output() buttonClicked = new EventEmitter();

  constructor() {
    console.log("Aquí solo tengo los valores default: "+this.name)
   }

  ngOnInit() {
    console.log("Aquí ya angular ha autocargado el valor input recibido: "+this.name)
  }

  findTwitterImg(){
    return `https://twivatar.glitch.me/${this.name}`;
  }

  // handleClick(){
  //   this.buttonClicked.emit(this.name);
  // }
}
