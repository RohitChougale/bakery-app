import { Products } from "../interfaces/products-config.interface";

export const products_data : Products[]=[

  // cakes
  {id:1,
  name:'Red Velvet cake',
  description: `Red velvet cake is a red, layered cake that's often topped with cream cheese frosting. It's made with buttermilk, vinegar, cocoa powder, and vanilla extract. The cake has a rich, velvety texture and a unique flavor that's a balance of sweet and tangy. `,
  rating:4.7,
  img:'../../assets/products/redVelvetcake.jpg',
  category_id:1,
  seller_id:1,
  default_price:30,
  type:'veg',
  varities:[
    {id:12,unit:'kg',quntity:0.5,price:20,is_default:false},
    {id:13,unit:'kg',quntity:1,price:30,is_default:true},
    {id:14,unit:'kg',quntity:1.5,price:40,is_default:false},
    {id:15,unit:'kg',quntity:2,price:50,is_default:false}
  ]
},
//cup cake
{
id:2,
name:'Venilla Cupcake',
description:`hese cupcakes are delicate, light and moist, not too sweet and have a picturesque dome for dressing them up with a mound of buttercream.`,
rating:5,
img:'../../assets/products/venilla_Cupcake.jpg',
category_id:3,
seller_id:1,
default_price:5,
type:'veg',
varities:[
  {id:1,
    unit:'piece',
    quntity:1,
    price:5,
    is_default:true
  }
]

},
//Cookies
{
  id:3,
  name:'Coockies',
  description:`These amazing cookies are made using melted butter, so they're extra soft and chewy, with crispy edges and plenty of chocolate chips!`,
  rating:4.5,
  img:'../../assets/categories/cookies.jpg',
  category_id:2,
  seller_id:1,
  default_price:40,
  type:'veg',
  varities:[
    {id:1,
      unit:'kg',
      quntity:1,
      price:50,
      is_default:true
    }
  ]
},
//breads
{
  id:4,
  name:'Breads',
  description:`There are many types of bread that can be included on a menu, including baguettes, focaccia, rolls, and Indian breads. `,
  rating:5,
  img:'../../assets/categories/breads.jpg',
  category_id:2,
  seller_id:1,
  default_price:40,
  type:'veg',
  varities:[
    {id:1,
      unit:'pack',
      quntity:1,
      price:20,
      is_default:true
    }
  ]
},
// Donuts
{
  id:5,
  name:'Donuts',
  description:`Doughnuts are a kind of ring-shaped snack food popular in many countries, which are usually deep fried from flour doughs.`,
  rating:4,
  img:'../../assets/categories/Donuts.jpg',
  category_id:2,
  seller_id:1,
  default_price:40,
  type:'veg',
  varities:[
    {id:1,
      unit:'kg',
      quntity:1,
      price:60,
      is_default:true
    }
  ]
}
  ]
