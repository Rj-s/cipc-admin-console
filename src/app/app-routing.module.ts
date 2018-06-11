import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services';

import {
  LoginComponent,
  AnnualreturnApplicationsComponent,
  CipcApplicationsComponent,
  ViewCipcApplicationComponent
} from './components'

const appRoutes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: '',
  canActivate: [AuthGuard],
  children: [
    {
      path: 'admin/annual-returns',
      component: AnnualreturnApplicationsComponent
    },
    {
      path: 'admin/cipc',
      component: CipcApplicationsComponent,
    },
    {
      path: 'admin/cipc/view-cipc-application/:id',
      component: ViewCipcApplicationComponent

    },
    {
      path: 'admin/annual-returns/view-cipc-application/:id',
      component: ViewCipcApplicationComponent
    },
    /* {
       path: 'account',
       component: UserAccountComponent,
       children: [
         {
           path: 'orders',
           component: OrdersComponent
         },
         {
           path: 'view-order/:id',
           component: ViewOrderComponent
         },
         {
           path: '',
           component: DetailsComponent
         }
       ]
     },
     
     {
       path: 'shop/cart',
       component: ShopCartComponent
     },
     {
       path: 'shop/order/:id',
       component: ShopOrderProcessedComponent
     },
     {
       path: 'shop/filter/:type/:id',
       component: ShopFilterComponent
     },
     {
       path: 'shop/product/:id',
       component: ShopProductComponent
     },
     {
       path: 'shop/checkout',
       component: ShopCheckoutComponent
     },
     {
       path: 'shop/search/:term',
       component: ShopSearchComponent
     },
     {
       path: 'admin/dashboard',
       component: AdminDashboardComponent
     },
     {
       path: 'admin/edit/api',
       component: AdminEditApiComponent
     },
     {
       path: 'admin/edit/category/:id',
       component: AdminEditCategoryComponent
     },
     {
       path: 'admin/edit/partner/:id',
       component: AdminEditPartnerComponent
     },
     {
       path: 'admin/edit/product/:id',
       component: AdminEditProductComponent
     },
     {
       path: 'admin/manage/products',
       component: AdminManageProductsComponent
     },
     {
       path: 'admin/manage/categories',
       component: AdminManageCategoriesComponent
     },
     {
       path: 'admin/manage/apis',
       component: AdminManageApisComponent
     },
     {
       path: 'admin/manage/partners',
       component: AdminManagePartnersComponent
     },
     {
       path: 'admin/view/order/:id',
       component: AdminViewOrderComponent
     },
     {
       path: 'admin/view/orders',
       component: AdminViewOrdersComponent
     },
     {
       path: 'admin',
       redirectTo: '/admin/dashboard',
       pathMatch: 'full'
     },
     {
       path: 'shop',
       redirectTo: '/shop/landing',
       pathMatch: 'full'
     },
     {
       path: '',
       redirectTo: '/shop/landing',
       pathMatch: 'full'
     }*/
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
