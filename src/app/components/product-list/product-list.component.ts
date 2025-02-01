import { IonicSlides } from '@ionic/angular/standalone';
import { SwiperModule } from './../../../../node_modules/swiper/types/shared.d';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products-config.interface';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports:[ProductComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductListComponent  implements OnInit {

  constructor() { }
  product=input<Products[]>();
  SwiperModule=[IonicSlides];

  ngOnInit() {}

}
