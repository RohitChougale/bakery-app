import { IonThumbnail } from '@ionic/angular/standalone';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-rect-box',
  templateUrl: './image-rect-box.component.html',
  styleUrls: ['./image-rect-box.component.scss'],
  imports:[IonThumbnail]
})
export class ImageRectBoxComponent  implements OnInit {

  image =input<string>('');
  constructor() { }

  ngOnInit() {}

}
