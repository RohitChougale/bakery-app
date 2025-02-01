export interface Seller{
  id:number;
  seller_name:string;
  type:'Business' | 'Individual' | 'AppOwner';
  role:string,
  phone:string,
  email?:string,
  address:string,
  lat?:number,
  lng?:number,
  pincode?:string,
  seller_img:string
}
