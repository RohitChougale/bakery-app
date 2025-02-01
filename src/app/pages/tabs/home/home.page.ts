import { ProductListComponent } from './../../../components/product-list/product-list.component';
import { Products } from './../../../interfaces/products-config.interface';
import { categories } from './../../../dummy-data/categories';
import { Component, computed, inject, OnInit } from '@angular/core';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownOutline, location, cart, notifications, options } from 'ionicons/icons';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { BannerComponent } from "../../../components/banner/banner.component";
import { CatogoryService } from 'src/app/services/catogory.service';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/interfaces/catagory-config.interface';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonCol, IonRow, IonButton, IonText, IonIcon, IonLabel, IonItem, IonContent, IonHeader, IonToolbar, ListHeadingComponent, BannerComponent, CategoriesComponent, ProductListComponent]
})
export class HomePage implements OnInit {

  categories=computed<Category[]>(()=>this.categoryService.getCategories());
  products=computed<Products[]>(()=>this.productService.getProducts());

  private categoryService= inject(CatogoryService);
  private productService = inject(ProductsService)

  constructor() {
    addIcons({location,chevronDownOutline,cart,notifications,options});
   }

  ngOnInit() {
  }

}
