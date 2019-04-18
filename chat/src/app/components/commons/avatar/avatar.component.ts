import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() username = 'laujorpan';
  @Input() userimage = `https://twivatar.glitch.me/${this.username}`;
  @Output() buttonClicked = new EventEmitter();

  constructor() {
    console.log('Aquí solo tengo los valores default: ' + this.username);
   }

  ngOnInit() {
    console.log('Aquí ya angular ha autocargado el valor input recibido: ' + this.username);
  }

  findTwitterImg() {
    return this.userimage;
  }

}
