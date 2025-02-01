import { Category } from 'src/app/interfaces/catagory-config.interface';
import { Seller } from './../../../interfaces/seller-config.interface';
import { Products } from 'src/app/interfaces/products-config.interface';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonFab, IonFabButton, IonIcon, IonCol, IonRow, IonList, IonLabel, IonItem, IonText, IonListHeader, IonAvatar, IonFooter } from '@ionic/angular/standalone';
import { Strings } from 'src/app/enums/strings';
import { single } from 'rxjs';
import { seller_data } from 'src/app/dummy-data/seller-Data';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { addIcons } from 'ionicons';
import { bagHandle, call, chatboxEllipses, heartOutline, shareSocialOutline, star } from 'ionicons/icons';
import { ImageRectBoxComponent } from 'src/app/widgets/image-rect-box/image-rect-box.component';
import { VegNonvegIndicatorComponent } from "../../../widgets/veg-nonveg-indicator/veg-nonveg-indicator/veg-nonveg-indicator.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [IonFooter, IonAvatar, IonListHeader, IonText, IonItem, IonLabel, IonList, IonRow, IonCol, IonIcon, IonFabButton, IonFab, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ImageRectBoxComponent, VegNonvegIndicatorComponent]
})
export class ProductDetailPage implements OnInit {

  currency= Strings.currency;
  readMore = signal<boolean>(false);
  productDetails= signal<| (Products &{seller_data?:Seller;Category?:Category } ) | null>(null)
  id!:number;
  productImg:string| undefined='';
  seller_img?:string='';

  private route = inject(ActivatedRoute);
  private productService = inject(ProductsService)
  constructor() {
    addIcons({heartOutline,shareSocialOutline,star,chatboxEllipses,call, bagHandle});
   }

  ngOnInit() {
    const id =this.route.snapshot.paramMap.get('id');
    console.log(id);

    if(!id){
      return;
    }
    this.id=parseInt(id);
    const product = this.productService.getProductById(this.id);
    console.log(product,'product');

    if(product) this.productDetails.set(product);
    this.productImg=product?.img
    this.seller_img=product?.seller_data?.seller_img;

  }

}
