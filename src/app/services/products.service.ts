// import { products } from './../dummy-data/products';
import { Category } from './../interfaces/catagory-config.interface';
import { Seller } from './../interfaces/seller-config.interface';
import { categories } from './../dummy-data/categories';
import { seller_data } from './../dummy-data/seller-Data';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products-config.interface';
import { products_data } from '../dummy-data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts():Products[]{
    return products_data;
  }
  getProductById(id:number):(Products &{seller_data?:Seller;Category?:Category }) |null {
    const product =products_data.find((product)=>
      product.id===id );
    if(product){
      const seller = seller_data.find((seller:Seller)=> seller.id=== product.seller_id);
      const category= categories.find((category)=>category.id === product.category_id);

      return {...product,...seller,...category};
    }
    return null

  }
}
