import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [

  {

    path: '', component: ProductListComponent

  },

{

  path: 'productItem', component: ProductItemComponent

},

  {

    path: 'item-detail/:id', component: ProductItemComponent
  },


{

    path: 'cart', component: CartComponent

},



  {path: 'success/:firstName/:totalPrice', component: ConfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
