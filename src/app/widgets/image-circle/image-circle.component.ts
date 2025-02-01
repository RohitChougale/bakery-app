import { Component, input, OnInit } from '@angular/core';
import {IonAvatar} from "@ionic/angular/standalone"

@Component({
  selector: 'app-image-circle',
  templateUrl: './image-circle.component.html',
  styleUrls: ['./image-circle.component.scss'],
  imports:[IonAvatar]
})
export class ImageCircleComponent  implements OnInit {

  constructor() { }

  image= input<string>('')
  ngOnInit() {}

}
