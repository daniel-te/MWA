import { Observable } from 'rxjs/Observable';
import { CartItem } from './cart-item';
import { CartService } from './cart.service';
import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/observable/from';


@Component({
  selector: 'shopping-cart',
  template: `<div style="position: fixed; top: 0px; right: 25px; padding: 20px; z-index: 100; min-width: 400px;">
    <h2> Shopping cart</h2><br>
    Products in cart: <strong>{{ prodQty }}</strong><br>
    Total in cart: <strong>{{ cartTotal | pricepipe }}</strong>
    <button (click)="toggleViewList()">{{ toggleMessage }} products in cart</button>
    <table style="border: 1px solid black" class="table table-condensed" *ngIf="showProds" >
        <thead>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Total Price</th>
        </thead>
        <tbody>
            <tr *ngFor="let prod of productList">
                <td>{{ prod.prod.name }}</td>
                <td>{{ prod.prod.price | pricepipe }}</td>
                <td>{{ prod.qty }}</td>
                <td>{{ prod.totalPrice | pricepipe }}</td>
            </tr>
        </tbody>
    </table>
  </div>`,
  styles: [`
table {
    border-collapse: collapse;
    width: 100%;
}

table, th, td {
    border: 1px solid black;
}
  `],
})
export class CartComponent implements OnInit {

    productList: CartItem[] = [];
    cartTotal = 0;
    prodQty = 0;
    showProds = false;
    toggleMessage = 'Show';


    constructor(private shoppingCart: CartService) {}

    ngOnInit() {
        this.shoppingCart.requestEvent().subscribe( ($event) => {
            this.loadCart($event);
        });
    }

    loadCart(l) {
        console.log(l);
        this.productList = [];
        this.cartTotal = 0;
        this.prodQty = 0;
        this.productList = l;
        this.productList.forEach((e) => {
            this.prodQty += e.qty;
            this.cartTotal += e.totalPrice;
        });
    }

    toggleViewList() {
        this.showProds = !this.showProds;
        this.toggleMessage = this.showProds ? 'Hide' : 'Show';
    }

}
