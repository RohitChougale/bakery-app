import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes:Routes=[
  {

      path: '',
      component:TabsPage,
      children:[
        {
          path:'',
          redirectTo:'/tabs/home',
          pathMatch:'full'
        },
        {
          path: 'home',
          loadComponent: () => import('./home/home.page').then( m => m.HomePage)
        },
        {
          path: 'expolre',
          loadComponent: () => import('./expolre/expolre.page').then( m => m.ExpolrePage)
        },
        {
          path: 'wishlist',
          loadComponent: () => import('./wishlist/wishlist.page').then( m => m.WishlistPage)
        },
        {
          path: 'chat',
          loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
        },
        {
          path: 'account',
          loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
        },
      ]
    },
    {
      path:'products/:id',
      loadComponent:()=>import('./product-detail/product-detail.page').then(m=>m.ProductDetailPage)
    }

]
