export interface Products{
id:number,
name:string,
description:string,
rating:number,
img:string,
category_id:number,
seller_id:number,
default_price:number,
type:string,
varities:{
  id:number,
  unit:string,
  quntity:number,
  price:number,
  is_default:boolean
}[],
}
