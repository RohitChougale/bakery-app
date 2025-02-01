import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AnimationOptions, LottieComponent, provideLottieOptions } from 'ngx-lottie';


@Component({
  selector: 'app-wishlist',
  providers:[
    provideLottieOptions({
      player:()=>import('lottie-web')
    })
  ],
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,LottieComponent]
})
export class WishlistPage implements OnInit {
  options:AnimationOptions={
    path:'../../../../assets/animation/Animation - 1738420424867.json'
  }

  constructor() { }

  ngOnInit() {
  }

}
