import { Product } from './../product';
import { CartItem } from './cart-item';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CartService {

    cartProducts: CartItem[] = [];

    event: EventEmitter<CartItem[]> = new EventEmitter<CartItem[]>();

    addProduct(prod: Product) {
        let exists = false;
        let index = -1;
        this.cartProducts.forEach((e, i) => {
            if (e.prod === prod) {
                exists = true;
                index = i;
            }
        });
        if (!exists && index === -1) {
            const newProd = new CartItem(prod, 1);
            this.cartProducts.push(newProd);
        } else {
            this.cartProducts[index].qty += 1;
            this.updateItemTotalPrice(index);
        }
        this.event.emit(this.cartProducts);
    }
    requestEvent() {
        return this.event;
    }
    updateItemTotalPrice(index: number) {
        this.cartProducts[index].totalPrice = this.cartProducts[index].qty * this.cartProducts[index].prod.price;
    }
    removeProduct(prod: Product): void {
        let exists = false;
        let index = -1;
        this.cartProducts.forEach((e, i) => {
            if (e.prod === prod) {
                exists = true;
                index = i;
            }
        });
        if (exists && index > -1) {
            this.cartProducts[index].qty -= 1;
            this.updateItemTotalPrice(index);
        }
        this.event.emit(this.cartProducts);
    }

    getList(): CartItem[] {
        return this.cartProducts.filter((p) =>  p.qty > 0 );
    }
}