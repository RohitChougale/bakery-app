import { Category } from "./catagory-config.interface";
import { Products } from "./products-config.interface";
import { Seller } from "./seller-config.interface";

export interface ProductDetail {

  data: | (Products &{seller_data?:Seller;Category?:Category } ) | null
}
