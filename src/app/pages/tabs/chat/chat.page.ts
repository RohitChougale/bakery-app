import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationOptions, LottieComponent, provideLottieOptions } from 'ngx-lottie';


@Component({
  selector: 'app-chat',
  providers:[
    provideLottieOptions({
      player:()=>import('lottie-web')
    })
  ],
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,LottieComponent]
})
export class ChatPage implements OnInit {

  options:AnimationOptions={
    path:'../../../../assets/animation/Animation - 1738420424867.json'
  }
  constructor() { }

  ngOnInit() {
  }

}
