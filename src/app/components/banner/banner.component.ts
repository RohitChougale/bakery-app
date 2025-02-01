import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, } from '@angular/core';
import {IonicSlides,IonRow} from '@ionic/angular/standalone';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports:[IonRow],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent  implements OnInit {

  swiperModules=[IonicSlides];

  bannerImages?: any[]=[
    {
      id:1,
      banner:'../../../assets/banners/banner1.avif',
      active:true,
      valueOfrestaurant_id:'1'
    },
    {
      id:2,
      banner:'../../../assets/banners/banner2.avif',
      active:true
    },
    {
      id:3,
      banner:'../../../assets/banners/banner3.avif',
      active:true
    }
  ]

  constructor() { }

  ngOnInit() {}

}
