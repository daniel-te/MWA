import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { CartModule }    from './cart/cart.module';
import { CartService } from './cart/cart.service';

@Component({
 selector: 'product-detail',
 template: `
   <div *ngIf="product">
     <h2>{{product.name}} details!</h2>
     <div><label>id: </label>{{product.id}}</div>
     <div>
       <label>name: </label>
       <input [(ngModel)]="product.name" placeholder="name"/>
     </div>
     <div><label>Description: </label>{{product.description}}</div>
     <div><label>Price: </label>{{product.price}}</div>
     <div><label>Condition: </label>{{product.condition}}</div>
     <div><label>Category: </label>{{product.category}}</div>
     <div><button (click)="addToCart(product)">Add to Shopping Cart</button></div>
   </div>
 `
})

export class ProductDetailComponent {
  
      constructor(private shoppingCart: CartService) {}
      @Input() product: Product;
  
      addToCart(prod: Product) {
        this.shoppingCart.addProduct(prod);
      }
  }
