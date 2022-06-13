import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  id: number | null = null;
  products: Product[]= [];
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.productService.getProduct().subscribe(res =>{
      this.products = res;
      this.product = this.getProductById(this.id)
      console.log(this.product)
    })
  }
  getProductById(id: number | null): Product{
    return this.products.filter(product => product.id === id)[0];
  }


  onSubmit(cartProduct: Product, e: any): boolean{
    let newCartProduct: CartProduct[] = [];
    let message: string = '';
    let CartExist: boolean = false;

    const selectedOption = e.target[0].options[e.target[0].options.selectedIndex].value;
    const cartProducts: CartProduct[] | [] = this.productService.getCartProduct();

    const cartIdx = cartProducts.findIndex(cart => cart.id === cartProduct.id)
    newCartProduct = cartProducts;

    if((cartIdx === -1) || (cartProducts.length === 0)){
      newCartProduct.push(Object.assign(cartProduct, {option: selectedOption}))
      message = `New Item '${cartProduct.name}' added to cart`;
    } else{
      const option: string = newCartProduct[cartIdx].option;
      CartExist = selectedOption === option

      if (CartExist){
        message = `${option} Item(s) of '${cartProduct.name}' existing in cart.`;
      }else{
        newCartProduct[cartIdx].id = cartProduct.id;
        newCartProduct[cartIdx].option = selectedOption;
        message = `${option} Item(s) of '${cartProduct.name}' existing in cart. Will be updated to ${selectedOption}`;
      }

    }

    !CartExist? this.productService.addToCart(newCartProduct): null;

    alert(message);

    return false;
  }



}
